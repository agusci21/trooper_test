import { Op } from "sequelize";
import TeacherDTO from "../../../../core/dtos/teacher_dto";
import { CreateTeacherInput } from "../../domain/input_output/create_teacher/create_teacher_input";
import { CreateTeacherOutput } from "../../domain/input_output/create_teacher/create_teacher_output";
import { GetTeachersInput } from "../../domain/input_output/get_teachers/get_teachers_input";
import { GetTeachersOutput } from "../../domain/input_output/get_teachers/get_teachers_output";
import { ITeacherRepository } from "../../domain/repositories/i_teacher_repository";
import { TeacherMapper } from "../mappers/teacher_mapper";
import { PasswordHelper } from "../../../../core/helpers/password_helper";


export class TeacherRepository implements ITeacherRepository{
    async createTeacher(input: CreateTeacherInput): Promise<CreateTeacherOutput> {
        try {
            const previousTeacher = await TeacherDTO.findOne({
                where: {
                    [Op.or] : {
                        dni: input.dni,
                        email: input.email,
                        [Op.and] : {
                            firstName: input.firstName,
                            lastName: input.lastName,
                        }
                    }
                }  
            })
            if(previousTeacher) {
                return new CreateTeacherOutput({
                    error: 'teacher_alrready_exist',
                })
            }
            const teacher = TeacherDTO.build({
                dni: input.dni,
                firstName: input.firstName,
                lastName: input.lastName,
                email: input.email,
                password: PasswordHelper.getEncriptedPassword(input.password),
            })
            await teacher.save()
            return new CreateTeacherOutput({
                teacher: TeacherMapper.fromDto(teacher)
            })
        } catch (e) {
            return new CreateTeacherOutput({error: 'internal_server_error'})
        }
    }
    async getTeachers(_: GetTeachersInput): Promise<GetTeachersOutput> {
        try {
            const teachersDtos = await TeacherDTO.findAll()
            const teachers = teachersDtos.map(e => TeacherMapper.fromDto(e))
            return new GetTeachersOutput({
                teachers
            })
        } catch (e) {
            return new GetTeachersOutput({error: 'internal_server_error'})
        }
    }

}
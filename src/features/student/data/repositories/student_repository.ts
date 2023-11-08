import StudentDTO from "../../../../core/dtos/student_dto";
import { Student } from "../../domain/entities/student";
import { CreateStudentInput } from "../../domain/inputs_outputs/create_student/create_student_input";
import { CreateStudentOutput } from "../../domain/inputs_outputs/create_student/create_student_output";
import { GetStudentsInput } from "../../domain/inputs_outputs/get_students/get_students_input";
import { GetStudentsOutput } from "../../domain/inputs_outputs/get_students/get_students_output";
import { IStudentRepository } from "../../domain/repositories/i_students_repository";
import { StudentMapper } from "../mappers/student_mapper";
import { UUIDHelper } from "../../../../core/helpers/uuid_helper";
import { PasswordHelper } from "../../../../core/helpers/password_helper";
import SubjectDTO from "../../../../core/dtos/subject_dto";

export class StudentRepository implements IStudentRepository {
    async getStudentById(id: string): Promise<Student | null> {
        const student = await StudentDTO.findByPk(id)
        if(!student){
            return null
        }
        return StudentMapper.fromDto(student)
    }
    async createStudent(input: CreateStudentInput): Promise<CreateStudentOutput> {
        try{
            const existStudentEmail = await StudentDTO.findOne({
                where: {
                    email: input.email
                } 
            }) != null
            if(existStudentEmail){
                return new CreateStudentOutput({
                    error: `email ${input.email} in use`
                })
            }
            const student = StudentDTO.build({
                id: UUIDHelper.getId(),
                firstName: input.firstName,
                lastName: input.lastName,
                email: input.email,
                password: PasswordHelper.getEncriptedPassword(input.password)
            })
            await student.save()
            return new CreateStudentOutput({
                student: StudentMapper.fromDto(student)
            })
        }catch(e){
            console.log(e)
            return new CreateStudentOutput({error: 'internal_server_error'})
        }
    }
    async getAllStudents(_: GetStudentsInput): Promise<GetStudentsOutput> {
        try {
            const studentsDto: StudentDTO[] = await StudentDTO.findAll<StudentDTO>({
                include: [{
                  model: SubjectDTO,
                  as: 'subjects',
                }],
              });
            const students: Student[] = studentsDto.map(e => StudentMapper.fromDto(e));
            return new GetStudentsOutput({
                students: students,
            });
        } catch (e) {
            console.log(e)
            return new GetStudentsOutput({
                error: 'internal_server_error'
            })
        }
    }
}

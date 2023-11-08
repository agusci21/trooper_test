import StudentDTO from "../../../../core/dtos/student_dto";
import SubjectDTO from "../../../../core/dtos/subject_dto";
import { UUIDHelper } from "../../../../core/helpers/uuid_helper";
import { Subject } from "../../domain/entities/subject";
import { CreateSubjectInput } from "../../domain/input_output/create_subject/create_subject_input";
import { CreateSubjectOutput } from "../../domain/input_output/create_subject/create_subject_output";
import { GetSubjectsInput } from "../../domain/input_output/get_subjects/get_subjects_input";
import { GetSubjectsOutput } from "../../domain/input_output/get_subjects/get_subjects_output";
import { ISubjectRepository } from "../../domain/repositories/i_subject_repository";
import { SubjectMapper } from "../mappers/subject_mapper";
import sequelize, { Op } from 'sequelize';


export class SubjectRepository implements ISubjectRepository {
    async getSubjectById(id: string): Promise<Subject | null> {
       const subject = await SubjectDTO.findByPk(id)
       if(!subject){
        return null
       }
       return SubjectMapper.fromDTO(subject)
    }
    async createSubject(input: CreateSubjectInput): Promise<CreateSubjectOutput> {
        try {
            const duplicatedSubject = await  SubjectDTO.findOne({
                where: {
                    [Op.and] : {
                        name: input.name,
                        career: input.career,
                        year: input.year,
                    }
                }
            })
            if(duplicatedSubject){
                return new CreateSubjectOutput({
                    error: `subject already exists`
                })
            }
            const subjectDTO = SubjectDTO.build({
                id: UUIDHelper.getId(),
                name: input.name,
                semester: input.semester,
                year: input.year,
                career: input.career,
            })
            await subjectDTO.save()
            return new CreateSubjectOutput({
                subject: SubjectMapper.fromDTO(subjectDTO)
            })
        } catch (e) {
            console.log(e)
            return new CreateSubjectOutput({
                error: 'internal_server_error'
            })
        }
    }
    async getSubjects(input: GetSubjectsInput): Promise<GetSubjectsOutput> {

        try {
            const searchQuerys: string[] = [];
            if (input.subjectName) {
                searchQuerys.push(`LOWER(TRIM(name)) LIKE '%${(input.subjectName.trim().toLowerCase())}%'`)
            }
            if (input.year) {
                searchQuerys.push(`year = ${input.year}`)
            }
            if (input.career) {
                searchQuerys.push(`career LIKE '%${input.career}%'`)
            }
            if (input.semester) {
                searchQuerys.push(`semester = '${input.semester}'`)
            }

            const searchQuery = searchQuerys.join(' AND ')
            const subjectsDto = await SubjectDTO.findAll<SubjectDTO>({
                include: {
                    model: StudentDTO,
                    as: 'students'
                },
                where: sequelize.literal(searchQuery)
            });

            return new GetSubjectsOutput({
                subjects: subjectsDto.map(e => SubjectMapper.fromDTO(e))
            })
        } catch (e) {
            console.log(e)
            return new GetSubjectsOutput({
                error: 'internal_server_error',
            })

        }

    }

}
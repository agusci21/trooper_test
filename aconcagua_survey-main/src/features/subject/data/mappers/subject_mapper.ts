import SubjectDTO from "../../../../core/dtos/subject_dto";
import { Subject } from "../../domain/entities/subject";
import { StudentMapper } from "./student_mapper";

export abstract class SubjectMapper {

    static fromDTO(dto: SubjectDTO) : Subject {
        return new Subject(
            {
                id: dto.id,
                carreer: dto.career,
                name: dto.name,
                semester: dto.semester,
                year: dto.year,
                students: dto.students?.map(e => StudentMapper.fromDto(e))
            }
        )
    }
}
import StudentDTO from "../../../../core/dtos/student_dto";
import { Student } from "../../domain/entities/student";
import { SubjectMapper } from "./subject_mapper";

export abstract class StudentMapper {

    public static fromDto(dto: StudentDTO): Student {
        console.log(dto.subjects)
        return new Student({
            docket: dto.docket,
            name: dto.name,
            subjects: dto.subjects?.map(e => SubjectMapper.fromDTO(e))
        })
    }
}
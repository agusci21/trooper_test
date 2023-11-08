import SubjectDTO from "../../../../core/dtos/subject_dto";
import { Subject } from "../../domain/entities/subject";

export abstract class SubjectMapper {

    static fromDTO(dto: SubjectDTO) : Subject {
        return new Subject(
            {
                id: dto.id,
                name: dto.name,
            }
        )
    }
}
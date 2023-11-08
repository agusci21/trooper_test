import TeacherDTO from "../../../../core/dtos/teacher_dto";
import { Teacher } from "../../domain/entities/teacher";

export abstract class TeacherMapper {
    static fromDto(dto:TeacherDTO) : Teacher {
        return new Teacher({
            dni: dto.dni,
            email:dto.email,
            firstName:dto.firstName,
            lastName:dto.lastName,
        })
    }
}
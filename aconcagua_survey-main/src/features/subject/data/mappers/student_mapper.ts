import StudentDTO from "../../../../core/dtos/student_dto";
import { Student } from "../../domain/entities/student";

export abstract class StudentMapper{

    public static fromDto (dto: StudentDTO) : Student {
        return new Student ({
            docket: dto.docket,
            firstName: dto.firstName,
            lastName: dto.lastName,
            email: dto.email,
            dni: dto.dni,
        })
    }
}
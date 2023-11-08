import { StudentSubject } from "../../domain/entities/student_subject";
import StudentSubjectDto from "../dto/student_subject_dto";

export abstract class StudentSubjectMapper {
    static fromDto(dto: StudentSubjectDto): StudentSubject {
        return new StudentSubject(dto.studentDocket, dto.subjectId)
    }
}
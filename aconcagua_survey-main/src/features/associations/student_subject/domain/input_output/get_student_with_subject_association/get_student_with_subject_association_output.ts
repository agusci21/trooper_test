import { StudentSubject } from "../../entities/student_subject";

export class GetStudentWithSubjectAssociationOutput {
    relation?: StudentSubject
    constructor(relation?: StudentSubject){
        this.relation = relation
    }
}

export class AssociateStdentWithSubjectInput {
    studentDocket: string
    subjectId: string
    constructor(studentDocket: string, subjectId: string) {
        this.studentDocket = studentDocket
        this.subjectId = subjectId
    }
}
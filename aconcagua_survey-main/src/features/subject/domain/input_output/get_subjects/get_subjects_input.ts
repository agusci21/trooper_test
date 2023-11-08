interface Arguments {
    subjectName?: string
    year?: string
    career?: string
    semester?: string
}
export class GetSubjectsInput {
    subjectName: string
    year: string
    career: string
    semester: string
    constructor(arg: Arguments){
        this.subjectName = arg.subjectName ?? ''
        this.career = arg.career ?? ''
        this.year = arg.year ?? ''
        this.semester = arg.semester ?? ''
    }
}
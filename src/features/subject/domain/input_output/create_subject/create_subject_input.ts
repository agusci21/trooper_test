interface Arguments {
    name: string
    year: number
    semester: string
    career: string
}
export class CreateSubjectInput {

    name: string
    year: number
    semester: string
    career: string

    constructor(arg: Arguments) {
        this.name = arg.name;
        this.year = arg.year;
        this.semester = arg.semester;
        this.career = arg.career;
    }

}
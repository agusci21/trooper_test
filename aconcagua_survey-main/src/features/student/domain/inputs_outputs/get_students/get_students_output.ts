import { Student } from "../../entities/student"
interface Arguments {
    students?: Student[]
    error?: string
}
export class GetStudentsOutput {

    public readonly students?: Student[]
    public readonly error?: string
    constructor(arg:Arguments) {
        this.students = arg.students
    }

}
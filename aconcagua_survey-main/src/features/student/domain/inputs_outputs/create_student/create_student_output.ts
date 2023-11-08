import { Student } from "../../entities/student"

interface Arguments {
    readonly student?: Student
    readonly error? : string
}

export class CreateStudentOutput {
    
    public readonly student?: Student
    public readonly error?: string

    constructor(arg: Arguments) {
        this.student = arg.student
        this.error = arg.error
    }
}
import { Teacher } from "../../entities/teacher"

interface Arguments {
    readonly error?: string
    readonly teacher?: Teacher
}

export class CreateTeacherOutput {

    public readonly error?: string
    public readonly teacher?: Teacher

    constructor(arg: Arguments) {
        this.error = arg.error
        this.teacher = arg.teacher
    }

}
import { Teacher } from "../../entities/teacher"

interface Arguments{
    teachers?: Teacher[] 
    error? : string
}
export class GetTeachersOutput{
    teachers?: Teacher[] 
    error? : string
    constructor(arg: Arguments) {
        this.error = arg.error
        this.teachers = arg.teachers
    }
}
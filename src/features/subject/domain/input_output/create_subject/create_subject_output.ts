import { Subject } from "../../entities/subject"

interface Arguments {
    error?: string
    subject?: Subject
}

export class CreateSubjectOutput{
    error?: string
    subject?: Subject

    constructor(arg: Arguments){
        this.error = arg.error
        this.subject = arg.subject
    }
}
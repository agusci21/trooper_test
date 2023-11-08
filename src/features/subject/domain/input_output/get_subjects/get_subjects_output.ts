import { Subject } from "../../entities/subject"

interface Arguments {
    error?: string
    subjects?: Subject[]
}

export class GetSubjectsOutput {
    error?: string
    subjects?: Subject[]
    constructor(arg: Arguments){
        this.error = arg.error
        this.subjects = arg.subjects
    }

}
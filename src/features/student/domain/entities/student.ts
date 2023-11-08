import { Subject } from "./subject"

interface Arguments {
    readonly docket: number
    readonly name: string
    readonly subjects?: Subject[]
}

export class Student {
    readonly docket: number
    readonly name: string
    readonly subjects: Subject[]

    constructor(arg: Arguments) {

        this.docket = arg.docket;
        this.name = arg.name;
        this.subjects = arg.subjects ?? [];
    }

}
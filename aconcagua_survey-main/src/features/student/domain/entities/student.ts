import { Person } from "../../../../core/entities/person"
import { Subject } from "./subject"

interface Arguments {
    readonly dni: number
    readonly docket: number
    readonly firstName: string
    readonly lastName: string
    readonly email: string
    readonly subjects?: Subject[]
}

export class Student extends Person{
    readonly docket: number
    readonly subjects: Subject[]

    constructor(arg: Arguments) {
        super({
            dni: arg.dni,
            email: arg.email,
            firstName: arg.firstName,
            lastName: arg.lastName,
        })
        this.docket = arg.docket
        this.subjects = arg.subjects ?? []
    }

}
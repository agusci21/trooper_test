import { Person } from "../../../../core/entities/person"
import { Subject } from "./subject"

interface Arguments {
    readonly dni: number
    readonly firstName: string
    readonly lastName: string
    readonly email: string
    readonly subjects?: Subject[]
}

export class Teacher extends Person{
    readonly subjects: Subject[]

    constructor(arg: Arguments) {
        super({
            dni: arg.dni,
            email: arg.email,
            firstName: arg.firstName,
            lastName: arg.lastName,
        })
        this.subjects = arg.subjects ?? []
    }

}
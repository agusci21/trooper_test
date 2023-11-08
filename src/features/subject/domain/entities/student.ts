import { Person } from "../../../../core/entities/person"

interface Arguments {
    readonly dni: number
    readonly docket: number
    readonly firstName: string
    readonly lastName: string
    readonly email: string
}

export class Student extends Person{
    readonly docket: number

    constructor(arg: Arguments) {
        super({
            dni: arg.dni,
            email: arg.email,
            firstName: arg.firstName,
            lastName: arg.lastName,
        })
        this.docket = arg.docket
    }

}


interface Atributes {
    readonly firstName: string
    readonly lastName: string
    readonly email: string
    readonly password: string
}

export class CreateStudentInput {
    public readonly firstName: string
    public readonly lastName: string
    public readonly email: string
    public readonly password: string

    constructor(arg: Atributes) {
        this.firstName = arg.firstName,
            this.lastName = arg.lastName,
            this.email = arg.email,
            this.password = arg.password
    }
}
interface Arguments {
    readonly dni: number
    readonly firstName: string
    readonly lastName: string
    readonly email: string
    readonly password: string
}

export class CreateTeacherInput {

    public readonly dni: number
    public readonly firstName: string
    public readonly lastName: string
    public readonly email: string
    public readonly password: string

    constructor(arg: Arguments) {
        this.dni = arg.dni
        this.firstName = arg.firstName
        this.lastName = arg.lastName
        this.email = arg.email
        this.password = arg.password
    }

}
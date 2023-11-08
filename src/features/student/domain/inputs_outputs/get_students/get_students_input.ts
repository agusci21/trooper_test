interface Atributes {
    readonly firstName?: string
    readonly lastName?: string
    readonly email?: string
}

export class GetStudentsInput {
    public readonly firstName?: string
    public readonly lastName?: string
    public readonly email?: string

    constructor(arg: Atributes) {
        this.firstName = arg.firstName
        this.lastName = arg.lastName
        this.email = arg.email
    }
}
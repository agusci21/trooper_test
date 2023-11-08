interface Arguments {
    readonly dni: number
    readonly firstName: string
    readonly lastName: string
    readonly email: string

}
export abstract class Person {

    public readonly dni: number
    public readonly firstName: string
    public readonly lastName: string
    public readonly email: string

    constructor(arg: Arguments) {
        this.dni = arg.dni;
        this.firstName = arg.firstName;
        this.lastName = arg.lastName;
        this.email = arg.email;
    }

}
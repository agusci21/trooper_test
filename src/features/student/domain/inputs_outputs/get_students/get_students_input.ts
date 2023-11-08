interface Atributes {
    readonly name?: string
    readonly docket?: string
}

export class GetStudentsInput {
    readonly name?: string
    readonly docket?: string


    constructor(arg: Atributes) {
        this.name = arg.name
        this.docket = arg.docket
    }
}
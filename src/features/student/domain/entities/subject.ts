
interface Arguments {
    id: string
    name: string
}

export class Subject {
    id: string
    name: string

    constructor(arg: Arguments) {
        this.id = arg.id
        this.name = arg.name
    }
}
import { Student } from "./student"

interface Arguments {
    id: string
    name: string
    year: number
    carreer: string
    semester: string
    students?: Student[]
}

export class Subject {
    id: string
    name: string
    year: number
    carreer: string
    semester: string
    students: Student[]

    constructor(arg: Arguments) {
        this.id = arg.id
        this.name = arg.name
        this.year = arg.year
        this.carreer = arg.carreer
        this.semester = arg.semester
        this.students = arg.students ?? []
    }
}
import { Request, Response } from "express";
import { IStudentRepository } from "../domain/repositories/i_students_repository";
import { GetStudentsInput } from "../domain/inputs_outputs/get_students/get_students_input";
import { CreateStudentInput } from "../domain/inputs_outputs/create_student/create_student_input";

export class StudentController {
    private readonly repository: IStudentRepository

    constructor(repository: IStudentRepository) {
        this.repository = repository
    }

    public getStudents = async (_: Request, res: Response) => {
        const input = new GetStudentsInput({
           
        })
        const output = await this.repository.getAllStudents(input);
        res.json({
            amount: output.students!.length,
            students: output.students
        })
    }

    public createStudent = async (req: Request, res: Response) => {
        const { email, firstName, lastName, password } = req.body
        const input = new CreateStudentInput({
            email,
            firstName,
            lastName,
            password
        })

        const output = await this.repository.createStudent(input);

        if(output.error){
            res.json({
                error: output.error
            })
            return;
        }

        res.json({
            student: output.student
        })
    }

}
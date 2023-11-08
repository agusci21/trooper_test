import { Request, Response } from "express";
import { ITeacherRepository } from "../domain/repositories/i_teacher_repository";
import { GetTeachersInput } from "../domain/input_output/get_teachers/get_teachers_input";
import { CreateTeacherInput } from "../domain/input_output/create_teacher/create_teacher_input";


export class TeacherController {

    private readonly repository: ITeacherRepository

    constructor(repository: ITeacherRepository){
        this.repository = repository
    }

    public readonly getTeachers = async (_: Request, res: Response) => {
        const input = new GetTeachersInput()
        const output = await this.repository.getTeachers(input)
        if(output.error){
            res.status(500).json({
                error: output.error
            })
            return
        }
        res.json({
            amount: output.teachers?.length,
            teachers: output.teachers,
        })
    }

    public readonly createTeacher = async (req: Request, res: Response) => {
        const {dni,email,firstName,lastName,password} = req.body
        const input = new CreateTeacherInput({
            dni,email,firstName,lastName,password
        });
        const output = await this.repository.createTeacher(input)
        if(output.error === 'alrready_exist'){
            res.status(400).json({
                error: output.error
            })
            return
        }
        if(output.error){
            res.status(500).json({
                error: output.error
            })
            return
        }
        
        res.json({
            teacher: output.teacher
        })
    }

}
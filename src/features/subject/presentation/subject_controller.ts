import { Request, Response } from "express";
import { ISubjectRepository } from "../domain/repositories/i_subject_repository";
import { GetSubjectsInput } from "../domain/input_output/get_subjects/get_subjects_input";
import { CreateSubjectInput } from "../domain/input_output/create_subject/create_subject_input";


export class SubjectContoller {

    private readonly repository: ISubjectRepository

    constructor(repository: ISubjectRepository) {
        this.repository = repository
    }

    getSubjects = async (req: Request, res: Response) => {
        const { subjectName, year, career, semester } = req.query
        const input = new GetSubjectsInput({
            subjectName: subjectName as string,
            career: career as string,
            year: year as string,
            semester: semester as string,
        })
        const output = await this.repository.getSubjects(input)
        if (output.error != null) {
            res.status(400).json({
                error: output.error
            })
            return;
        }
        res.json({
            amount: output.subjects!.length,
            subjects: output.subjects,
        })
    }

    createSubject = async (req: Request, res: Response) => {
        const { name, year, career, semester } = req.body
        const input = new CreateSubjectInput({
            career,
            name,
            semester,
            year,
        })

        const output = await this.repository.createSubject(input)

        if (output.error != null) {
            res.status(400).json({
                error: output.error
            })
            return
        }

        res.json({
            subject: output.subject
        })
    }
}
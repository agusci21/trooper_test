import { Request, Response } from "express";
import { IAssociateStudentWithSubjectUseCase } from "../domain/use_cases/abstractions/i_associate_student_with_subject_use_case";
import { AssociateStdentWithSubjectInput } from "../domain/input_output/associate_student_with_subject/associate_student_with_subject_input";


export class StudentSubjectController {

    useCase: IAssociateStudentWithSubjectUseCase

    constructor(useCase: IAssociateStudentWithSubjectUseCase) {
        this.useCase = useCase
    }

    public readonly assosiateStudentWithSubject = async (req: Request, res: Response) => {
        const { studentDocket, subjectId } = req.body
        const input = new AssociateStdentWithSubjectInput(studentDocket, subjectId)
        const output = await this.useCase.excecute(input)
        if (output.error?.includes('internal_server_error')) {
            res.status(500).json({
                error: output.error,
            })
            return
        }
        if (output.error?.includes('not_founded')) {
            res.status(404).json({
                error: output.error,
            })
            return
        }

        if (output.error) {
            res.status(400).json({
                error: output.error,
            })
            return;
        }

        res.json({
            message: 'association successful'
        })

    }
}
import { IStudentRepository } from "../../../../../student/domain/repositories/i_students_repository";
import { ISubjectRepository } from "../../../../../subject/domain/repositories/i_subject_repository";
import { AssociateStdentWithSubjectInput } from "../../input_output/associate_student_with_subject/associate_student_with_subject_input";
import { AssociateStdentWithSubjectOutput } from "../../input_output/associate_student_with_subject/associate_student_with_subject_output";
import { GetStudentWithSubjectAssociationInput } from "../../input_output/get_student_with_subject_association/get_student_with_subject_association_input";
import { IStudentSubjectRepository } from "../../repositories/i_student_subject_repository";
import { IAssociateStudentWithSubjectUseCase } from "../abstractions/i_associate_student_with_subject_use_case";
interface Arguments {
    readonly studentRepository: IStudentRepository
    readonly subjectRepository: ISubjectRepository
    readonly studentSubjectRepository: IStudentSubjectRepository
}

export class AssociateStudentWithSubjectUseCase implements IAssociateStudentWithSubjectUseCase {
    private readonly studentRepository: IStudentRepository
    private readonly subjectRepository: ISubjectRepository
    private readonly studentSubjectRepository: IStudentSubjectRepository
    constructor(arg: Arguments) {
        this.studentRepository = arg.studentRepository
        this.subjectRepository = arg.subjectRepository
        this.studentSubjectRepository = arg.studentSubjectRepository
    }

    async excecute(input: AssociateStdentWithSubjectInput): Promise<AssociateStdentWithSubjectOutput> {

        const student = await this.studentRepository.getStudentById(input.studentDocket)
        const subject = await this.subjectRepository.getSubjectById(input.subjectId)

        const errors: string[] = []

        if (!student) {
            errors.push('student_not_founded')
        }
        if (!subject) {
            errors.push('subject_not_founded')
        }
        if (errors.length != 0) {
            const error = errors.join('_and_')
            return new AssociateStdentWithSubjectOutput(error)
        }
        const studentSubjectInput = new GetStudentWithSubjectAssociationInput(input.studentDocket, input.subjectId)
        const studentSubjectOutput = await this.studentSubjectRepository.getStudentSubjectAssociation(studentSubjectInput)
        if (studentSubjectOutput.relation) {
            return new AssociateStdentWithSubjectOutput('association_already_exist')
        }

        const associateOutput = await this.studentSubjectRepository.associateStudentWithSubject(input)

        return new AssociateStdentWithSubjectOutput(associateOutput.error)
    }

}
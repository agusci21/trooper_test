import { AssociateStdentWithSubjectInput } from "../../input_output/associate_student_with_subject/associate_student_with_subject_input";
import { AssociateStdentWithSubjectOutput } from "../../input_output/associate_student_with_subject/associate_student_with_subject_output";

export interface IAssociateStudentWithSubjectUseCase {
    excecute(input: AssociateStdentWithSubjectInput) : Promise<AssociateStdentWithSubjectOutput>
}
import { AssociateStdentWithSubjectInput } from "../input_output/associate_student_with_subject/associate_student_with_subject_input";
import { AssociateStdentWithSubjectOutput } from "../input_output/associate_student_with_subject/associate_student_with_subject_output";
import { GetStudentWithSubjectAssociationInput } from "../input_output/get_student_with_subject_association/get_student_with_subject_association_input";
import { GetStudentWithSubjectAssociationOutput } from "../input_output/get_student_with_subject_association/get_student_with_subject_association_output";

export interface IStudentSubjectRepository{
    getStudentSubjectAssociation(input: GetStudentWithSubjectAssociationInput) : Promise<GetStudentWithSubjectAssociationOutput>
    associateStudentWithSubject(input: AssociateStdentWithSubjectInput) : Promise<AssociateStdentWithSubjectOutput>
}
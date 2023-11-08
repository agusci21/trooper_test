import { AssociateStdentWithSubjectInput } from "../../domain/input_output/associate_student_with_subject/associate_student_with_subject_input";
import { AssociateStdentWithSubjectOutput } from "../../domain/input_output/associate_student_with_subject/associate_student_with_subject_output";
import { GetStudentWithSubjectAssociationInput } from "../../domain/input_output/get_student_with_subject_association/get_student_with_subject_association_input";
import { GetStudentWithSubjectAssociationOutput } from "../../domain/input_output/get_student_with_subject_association/get_student_with_subject_association_output";
import { IStudentSubjectRepository } from "../../domain/repositories/i_student_subject_repository";
import StudentSubjectDto from "../dto/student_subject_dto";
import { StudentSubjectMapper } from "../mappers/student_subject_mapper";

export class StudentSubjectRepository implements IStudentSubjectRepository {
    async associateStudentWithSubject(input: AssociateStdentWithSubjectInput): Promise<AssociateStdentWithSubjectOutput> {
        try {
            const relation = StudentSubjectDto.build({
                studentDocket: input.studentDocket,
                subjectId: input.subjectId,
            })

            await relation.save()
            return new AssociateStdentWithSubjectOutput()
        } catch (e) {
            return new AssociateStdentWithSubjectOutput('internal_server_error')
        }
    }
    async getStudentSubjectAssociation(input: GetStudentWithSubjectAssociationInput): Promise<GetStudentWithSubjectAssociationOutput> {
        const relation = await StudentSubjectDto.findOne({
            where: {
                studentDocket: input.studentDocket,
                subjectId: input.subjectId,
            }
        })

        if (!relation) {
            return new GetStudentWithSubjectAssociationOutput()
        }

        return new GetStudentWithSubjectAssociationOutput(StudentSubjectMapper.fromDto(relation))
    }

}
import { Subject } from "../entities/subject";
import { CreateSubjectInput } from "../input_output/create_subject/create_subject_input";
import { CreateSubjectOutput } from "../input_output/create_subject/create_subject_output";
import { GetSubjectsInput } from "../input_output/get_subjects/get_subjects_input";
import { GetSubjectsOutput } from "../input_output/get_subjects/get_subjects_output";

export interface ISubjectRepository {
    getSubjects(input: GetSubjectsInput): Promise<GetSubjectsOutput>
    createSubject(input: CreateSubjectInput) : Promise<CreateSubjectOutput>
    getSubjectById(id: string) : Promise<Subject | null>
}
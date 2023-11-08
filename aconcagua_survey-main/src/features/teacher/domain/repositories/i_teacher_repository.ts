import { CreateTeacherInput } from "../input_output/create_teacher/create_teacher_input";
import { CreateTeacherOutput } from "../input_output/create_teacher/create_teacher_output";
import { GetTeachersInput } from "../input_output/get_teachers/get_teachers_input";
import { GetTeachersOutput } from "../input_output/get_teachers/get_teachers_output";

export interface ITeacherRepository {
    getTeachers(input: GetTeachersInput) : Promise<GetTeachersOutput>
    createTeacher(input: CreateTeacherInput) : Promise<CreateTeacherOutput>
}
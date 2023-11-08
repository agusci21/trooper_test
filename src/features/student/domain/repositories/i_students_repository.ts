import { Student } from "../entities/student";
import { CreateStudentInput } from "../inputs_outputs/create_student/create_student_input";
import { CreateStudentOutput } from "../inputs_outputs/create_student/create_student_output";
import { GetStudentsInput } from "../inputs_outputs/get_students/get_students_input";
import { GetStudentsOutput } from "../inputs_outputs/get_students/get_students_output";

export interface IStudentRepository {
    getAllStudents(input: GetStudentsInput): Promise<GetStudentsOutput>
    createStudent(input: CreateStudentInput) : Promise<CreateStudentOutput>
    getStudentById(id: string) : Promise<Student | null>
}
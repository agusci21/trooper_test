import StudentDTO from "../dtos/student_dto"
import SubjectDTO from "../dtos/subject_dto"
import TeacherDTO from "../dtos/teacher_dto"
import { PasswordHelper } from "../helpers/password_helper"

export abstract class SeedDataHelper {
    static generateSubjectsSeedData = async () => {
        const subjects = [
            // Primer semestre
            {
                id: '1',
                name: 'Matematica',
                semester: 'first',
                year: 1,
                career: 'informatica',
            },
            {
                id: '2',
                name: 'Arquitectura I',
                semester: 'first',
                year: 1,
                career: 'informatica',
            },
            {
                id: '3',
                name: 'Programacion I',
                semester: 'first',
                year: 1,
                career: 'informatica',
            },
            {
                id: '4',
                name: 'Laboratorio I',
                semester: 'first',
                year: 1,
                career: 'informatica',
            },
            // Segundo semestre
            {
                id: '5',
                name: 'Laboratorio II',
                semester: 'second',
                year: 1,
                career: 'informatica',
            },
            {
                id: '6',
                name: 'Arquitectura II',
                semester: 'second',
                year: 1,
                career: 'informatica',
            },
            {
                id: '7',
                name: 'Programacion II',
                semester: 'second',
                year: 1,
                career: 'informatica',
            },
            {
                id: '8',
                name: 'Analisis matemático I',
                semester: 'second',
                year: 1,
                career: 'informatica',
            },
            // Tercer semestre
            {
                id: '9',
                name: 'Analisis matemático II',
                semester: 'first',
                year: 2,
                career: 'informatica',
            },
            {
                id: '10',
                name: 'Sistemas de comunicaciones',
                semester: 'first',
                year: 2,
                career: 'informatica',
            },
            {
                id: '11',
                name: 'Diseño I',
                semester: 'first',
                year: 2,
                career: 'informatica',
            },
            {
                id: '12',
                name: 'Laboratorio III',
                semester: 'first',
                year: 2,
                career: 'informatica',
            },
            // Cuarto semestre
            {
                id: '13',
                name: 'Laboratorio IV',
                semester: 'second',
                year: 2,
                career: 'informatica',
            },
            {
                id: '14',
                name: 'Diseño II',
                semester: 'second',
                year: 2,
                career: 'informatica',
            },
            {
                id: '15',
                name: 'Estadistica',
                semester: 'second',
                year: 2,
                career: 'informatica',
            },
            {
                id: '16',
                name: 'Base de datos',
                semester: 'second',
                year: 2,
                career: 'informatica',
            },
        ]
        try {
            subjects.forEach(async (e) => {
                const subject = SubjectDTO.build(e)
                await subject.save()
            })
        } catch (_) { }

    }

    static genetateStudentsSeedData = async () => {
        const students = [
            {
                dni: 44009825,
                firstName: 'Franco Agustin',
                docket: 113747,
                lastName: 'Cola Ibáñez',
                email: 'agustoncola54@gmail.com',
                password: PasswordHelper.getEncriptedPassword('Abcd1234')
            },
        ]

        try {
            students.forEach(async (e) => {
                const student = StudentDTO.build(e)
                await student.save()
            })
        } catch (e) {
            console.log(e)
        }


    }
    static generateTeachersSeedData = async () => {
        const teachers = [
            {
                dni: 12332123,
                firstName: 'Mariana',
                lastName: 'Cuervo',
                email: 'test000@test.com',
                password: PasswordHelper.getEncriptedPassword('Abcd1234'),
            },
            {
                dni: 12332124,
                firstName: 'Martin',
                lastName: 'Eraso',
                email: 'test001@test.com',
                password: PasswordHelper.getEncriptedPassword('Abcd1234'),
            },
            {
                dni: 12332125,
                firstName: 'Pablo',
                lastName: 'Aquaro',
                email: 'test002@test.com',
                password: PasswordHelper.getEncriptedPassword('Abcd1234'),
            },
        ]

        try {
            teachers.map(async (e) => {
                const teacher = TeacherDTO.build(e)
                await teacher.save()
            })
        } catch (e) {

        }
    }
}
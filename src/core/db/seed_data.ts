import StudentDTO from "../dtos/student_dto"
import SubjectDTO from "../dtos/subject_dto"
import { PasswordHelper } from "../helpers/password_helper"

export abstract class SeedDataHelper {
    static generateSubjectsSeedData = async () => {
        const subjects = [
          {
            'id': '1',
            'name': 'Matematica',
          },
          {
            'id': '2',
            'name': 'Fisica',
          },
          {
            'id': '3',
            'name': 'Literatura',
          },
          {
            'id': '4',
            'name': 'Historia',
          },
          {
            'id': '5',
            'name': 'Quimica',
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
}
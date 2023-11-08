import StudentDTO from "../dtos/student_dto"
import SubjectDTO from "../dtos/subject_dto"

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
        docket: 1,
        name: 'Juan Pérez',
      },
      {
        docket: 2,
        name: 'María Gómez',
      },
      {
        docket: 3,
        name: 'Carlos Rodríguez',
      },
      {
        docket: 4,
        name: 'Laura Martínez',
      },
      {
        docket: 5,
        name: 'Andrés López',
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
import { Router } from "express"
import { StudentSubjectController } from "./student_subject_controller"
import { AssociateStudentWithSubjectUseCase } from "../domain/use_cases/implementations/associate_student_with_subject_use_case"
import { StudentRepository } from "../../../student/data/repositories/student_repository"
import { SubjectRepository } from "../../../subject/data/repositories/subject_repository"
import { StudentSubjectRepository } from "../data/repositories/student_subject_repository"

export abstract class StudentSubjectRoute {
    static get routes () : Router {
        const router = Router()
        const controller = new StudentSubjectController(new AssociateStudentWithSubjectUseCase({
            studentRepository: new StudentRepository(),
            subjectRepository: new SubjectRepository(),
            studentSubjectRepository: new StudentSubjectRepository(),
        }))
        router.post('/student/subject', controller.assosiateStudentWithSubject)
        return router
    }
}
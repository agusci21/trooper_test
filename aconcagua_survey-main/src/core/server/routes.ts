import { Router } from "express";
import { StudentRoutes } from "../../features/student/presentation/student_routes";
import { SubjectRoutes } from "../../features/subject/presentation/subject_routes";
import { StudentSubjectRoute } from "../../features/associations/student_subject/presentation/student_subject_route";
import { TeacherRoutes } from "../../features/teacher/presentation/teacher_routes";

export abstract class AppRoutes {

    static get routes(): Router {
        const router = Router()
        router.use('/api/student', StudentRoutes.routes)
        router.use('/api/subject', SubjectRoutes.routes)
        router.use('/api/associations', StudentSubjectRoute.routes)
        router.use('/api/teacher', TeacherRoutes.routes)
        return router
    }
}
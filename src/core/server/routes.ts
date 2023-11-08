import { Router } from "express";
import { StudentRoutes } from "../../features/student/presentation/student_routes";
import { SubjectRoutes } from "../../features/subject/presentation/subject_routes";
import { StudentSubjectRoute } from "../../features/associations/student_subject/presentation/student_subject_route";

export abstract class AppRoutes {

    static get routes(): Router {
        const router = Router()
        router.use('/api/student', StudentRoutes.routes)
        router.use('/api/subject', SubjectRoutes.routes)
        router.use('/api/associations', StudentSubjectRoute.routes)
        return router
    }
}
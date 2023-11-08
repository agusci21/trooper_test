import { Router } from "express";
import { SubjectContoller } from "./subject_controller";
import { SubjectRepository } from "../data/repositories/subject_repository";
import { SubjectMiddlewares } from "./subject_middlewares";


export abstract class SubjectRoutes {
    static get routes(): Router {
        const controller = new SubjectContoller(new SubjectRepository())
        const router = Router()
        router.get('/', controller.getSubjects)
        router.post('/',SubjectMiddlewares.createSubject ,controller.createSubject)
        return router;
    }
}
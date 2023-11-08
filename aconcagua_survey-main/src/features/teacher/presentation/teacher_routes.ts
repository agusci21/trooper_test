import { Router } from "express";
import { TeacherController } from "./teacher_controller";
import { TeacherRepository } from "../data/repositories/teacher_repository";
import { TeacherMiddlewares } from "./teacher_middlewares";

export abstract class TeacherRoutes {
    static get routes(): Router {
        const router = Router()
        const controller = new TeacherController(new TeacherRepository())
        router.get('/', controller.getTeachers)
        router.post('/',TeacherMiddlewares.createTeacher ,controller.createTeacher)
        return router
    }
}
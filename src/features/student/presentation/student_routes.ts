import { Router } from "express";
import { StudentController } from "./student_controller";
import { StudentRepository } from "../data/repositories/student_repository";
import { StudentMiddlewares } from "./student_middlewares";


export abstract class StudentRoutes {

    static get routes(): Router {
        const router = Router()
        const controller = new StudentController(new StudentRepository())
        router.get('/', controller.getStudents)
        router.post('/', StudentMiddlewares.createStudent, controller.createStudent)
        return router
    }
}
import { check } from "express-validator";
import { validateFields } from "../../../core/helpers/validate_fields";

export abstract class TeacherMiddlewares {
    static get createTeacher () {
        return [
            check('dni').notEmpty().isNumeric(),
            check('firstName').notEmpty(),
            check('lastName').notEmpty(),
            check('email').notEmpty().isEmail(),
            check('password').notEmpty(),
            validateFields
        ]
    }
}
import { check } from "express-validator";
import { validateFields } from "../../../core/helpers/validate_fields";

export abstract class StudentMiddlewares {

    static get createStudent () {
        return [
            check('email').notEmpty().isEmail(),
            check('firstName').notEmpty(),
            check('lastName').notEmpty(),
            check('password').notEmpty(),
            validateFields
        ]
    }
}
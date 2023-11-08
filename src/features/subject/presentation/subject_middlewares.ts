import { check } from "express-validator";
import { validateFields } from "../../../core/helpers/validate_fields";

export abstract class SubjectMiddlewares {
    static get createSubject() {
        return [
            check('year').isNumeric(),
            check('name').notEmpty(),
            check('career').notEmpty(),
            check('semester').notEmpty(),
            validateFields
        ]
    }
}
import { DataTypes, Model } from "sequelize";
import db from "../../../../../core/db/connection";
import SubjectDTO from "../../../../../core/dtos/subject_dto";
import StudentDTO from "../../../../../core/dtos/student_dto";

class StudentSubjectDto extends Model {
    declare studentDocket: string
    declare subjectId: string
    declare qualification: number
}

StudentSubjectDto.init({
    studentDocket: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: StudentDTO,
            key: 'docket',
        }
    },
    subjectId: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
            model: SubjectDTO,
            key: 'id'
        },
    },

    qualification: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize: db,
    tableName: 'student_subject',
    timestamps: false
})

export default StudentSubjectDto
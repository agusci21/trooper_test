import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import StudentDTO from "./student_dto";

class SubjectDTO extends Model {
    declare id: string
    declare name: string
    declare year: number
    declare career: string
    declare semester: string
    declare students: StudentDTO[]
}

SubjectDTO.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    career: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    semester: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
    },
}, {
    tableName: 'subject',
    sequelize: db,
});

export default SubjectDTO;

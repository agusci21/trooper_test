import { DataTypes, Model } from "sequelize";
import db from "../db/connection";

class SubjectDTO extends Model {
    declare id: string
    declare name: string
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

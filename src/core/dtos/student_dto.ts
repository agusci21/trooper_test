import { Model, DataTypes } from 'sequelize'
import db from '../db/connection'
import SubjectDTO from './subject_dto'

class StudentDTO extends Model {
  declare docket: number
  declare dni: number
  declare firstName: string
  declare lastName: string
  declare email: string
  declare password: string
  declare subjects: SubjectDTO[]
}

StudentDTO.init(
  {
    docket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
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
  },
  {
    tableName: 'student',
    sequelize: db,
  },
)

export default StudentDTO
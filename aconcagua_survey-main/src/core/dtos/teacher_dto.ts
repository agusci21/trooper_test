import { Model, DataTypes } from 'sequelize'
import db from '../db/connection'
import SubjectDTO from './subject_dto'

class TeacherDTO extends Model {
  declare dni: number
  declare firstName: string
  declare lastName: string
  declare email: string
  declare password: string
  declare subjects: SubjectDTO[]
}

TeacherDTO.init(
  {
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
    tableName: 'teacher',
    sequelize: db,
  },
)

export default TeacherDTO
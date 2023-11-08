import { Model, DataTypes } from 'sequelize'
import db from '../db/connection'
import SubjectDTO from './subject_dto'

class StudentDTO extends Model {
  declare docket: number
  declare name: string
  declare subjects: SubjectDTO[]
}

StudentDTO.init(
  {
    docket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
  },
  {
    tableName: 'student',
    sequelize: db,
  },
)

export default StudentDTO
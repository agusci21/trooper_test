import { SeedDataHelper } from "../db/seed_data"
import StudentDTO from "../dtos/student_dto"
import SubjectDTO from "../dtos/subject_dto"

export const createTablesIfNotExists = async () => {
    await createStudentTableIfNotExist()
    await createSubjectTableIfNotExist()
    await createStudentSubjectTableIfNotExist()
    await generateSeedData()
}

const createStudentTableIfNotExist = async () => {
    StudentDTO.sync().then(() => {
        console.log("Table created: student")
    }).catch((_) => {
        console.log(_)
        console.log("could not create table Student")
    })
    StudentDTO.belongsToMany(SubjectDTO, {
        through: 'student_subject',
        timestamps: false,
        as: 'subjects',
        foreignKey: 'studentDocket',
        otherKey: 'subjectId',
    })
}
const createSubjectTableIfNotExist = async () => {
    SubjectDTO.sync().then(() => {
        console.log("Table created: subject")
    }).catch((_) => {
        console.log(_)
        console.log("could not create table subject")
    })
    SubjectDTO.belongsToMany(StudentDTO, {
        through: 'student_subject',
        timestamps: false,
        as: 'students',
        foreignKey: 'subjectId',
        otherKey: 'studentDocket'
    })
}

const createStudentSubjectTableIfNotExist = async () => {

}

const generateSeedData = async () => {
    await SeedDataHelper.generateSubjectsSeedData()
    await SeedDataHelper.genetateStudentsSeedData()
}
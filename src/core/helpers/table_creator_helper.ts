import StudentSubjectDto from "../../features/associations/student_subject/data/dto/student_subject_dto"
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
    StudentSubjectDto.sync().then(() => {
        console.log("Table created: student_subject")
    }).catch((_) => {
        console.log(_)
        console.log("could not create table student_subject")
    })
}

const generateSeedData = async () => {
    //await SeedDataHelper.generateSubjectsSeedData()
    //await SeedDataHelper.genetateStudentsSeedData()
}
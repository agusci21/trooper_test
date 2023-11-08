import StudentDTO from "../dtos/student_dto"

export const checkIfEmailExists = async (email: string) => {
  const student = await StudentDTO.findOne({
    where: { email },
  })
  return student !== null
}

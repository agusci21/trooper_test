import bcryptjs from 'bcryptjs';

export abstract class PasswordHelper {
 
    static getEncriptedPassword(password: string) : string {
        const salt = bcryptjs.genSaltSync()
        return bcryptjs.hashSync(password, salt)
    }
}
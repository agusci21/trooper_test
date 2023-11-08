import jwt from 'jsonwebtoken'
import { EnvironmentConfig } from './environment_config'
export const generateJWT = (uid: string) => {
    return new Promise( (resolve, reyect) => {
        const payload = {uid}
        jwt.sign(payload, EnvironmentConfig.secretOrPrivateKey || '', {
            expiresIn:'30d'
        },(err, token) => {
            if(err) {
                console.log(err)
                reyect('could not generate jwt')
            }else{
                resolve(token)
            }
        })
    })
}
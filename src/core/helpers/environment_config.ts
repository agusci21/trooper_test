require('dotenv').config()
export abstract class EnvironmentConfig{

    static get environment() {
        return process.env.ENVIRONMENT
    }

    static get port() : number {
        return parseInt(process.env.PORT ?? '8080')
    }
    static get secretOrPrivateKey(){
        return process.env.SECRET_OR_PRIVATE_KEY
    }
    static get databaseName (){
        return process.env.DATABASE_NAME
    }
    static get databaseUser(){
        return process.env.DATABASE_USER
    }
    static get databasePassword(){
        return process.env.DATABASE_PASSWORD
    }
    static get host() {
        return process.env.HOST
    }
    static get databaseEngine() {
        return process.env.DATABASE_ENGINE
    }
}
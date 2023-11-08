import { Sequelize } from "sequelize";
import { EnvironmentConfig } from "../helpers/environment_config";

const getConnectionString = (): string => `${EnvironmentConfig.databaseEngine}://${EnvironmentConfig.databaseUser}:${EnvironmentConfig.databasePassword}@${EnvironmentConfig.host}/${EnvironmentConfig.databaseName}`
const db = new Sequelize(getConnectionString(), {
    logging: false
})
export default db
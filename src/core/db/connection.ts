import { Sequelize } from "sequelize";

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './core/db/database.sqlite',
  
})
export default db
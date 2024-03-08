import {Sequelize} from "sequelize";
import {configration} from "../config/configFile.js";

const {db} = configration
export const sequelize = new Sequelize(db, {
    logging: false
})
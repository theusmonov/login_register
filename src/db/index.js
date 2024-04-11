import { Sequelize } from "sequelize";
import config from "../shared/config/index.js";


const connectDb = new Sequelize(config.db, {
    logging: false
})

export default connectDb;
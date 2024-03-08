import express from "express";
import {configration} from "./config/configFile.js";
import {sequelize} from "./db/database.js"

const {port, host, db} = configration;

const app = express();

try {
    await sequelize.authenticate();
    console.log("Database ulanish muvaffaqiyatli amalga oshirilgan")
} catch (err) {
    console.log(`Database ulanishda muammo bor${err}`)
}

app.listen(port, () => {
    console.log(`Server is running http://${host}:${port}`)
})
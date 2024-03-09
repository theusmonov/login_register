import express from "express";
import { configration } from "./config/configFile.js";
import { sequelize } from "./db/database.js";


const { port, host } = configration;

const app = express();
app.use(express.json());


try {
    await sequelize.authenticate();
    console.log("Database ulanish muvaffaqiyatli amalga oshirilgan");
} catch (err) {
    console.log(`Database ulanishda muammo bor${err}`);
}

app.listen(port, () => {
    console.log(`Server is running http://${host}:${port}`);
});

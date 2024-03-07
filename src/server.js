import express from "express";
import {configration} from "./config/configFile.js";

const {port, host, db} = configration;

const app = express();

app.listen(port, () => {
    console.log(`Server is running http://${host}:${port}`)
})
import express from "express";
import config from "./shared/config/index.js";


const app = express();
app.use(express.json())


app.listen(config.port, () => {
    console.log(`Server is running on http://${config.host}:${config.port}`)
})
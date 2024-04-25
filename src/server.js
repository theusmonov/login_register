import express from "express";
import config from "./shared/config/index.js";
import mainRouter from "./api.js";
import {errorhandler} from "./shared/errors/error-status.js";


const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Login-Register! 🔐")
})

app.use(mainRouter);
app.use(errorhandler)

app.listen(config.port, () => {
    console.log(`Server is running on http://${config.host}:${config.port}`)
});
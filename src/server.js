import express from "express";
import config from "./shared/config/index.js";
import mainRouter from "./api.js";
import {errorHandler} from "./shared/errors/error-status.js";

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Login-Register! 🔐")
})

app.use(mainRouter);
app.use(errorHandler)


app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
})

app.listen(config.port, () => {
    console.log(`Server is running on http://${config.host}:${config.port}`)
});
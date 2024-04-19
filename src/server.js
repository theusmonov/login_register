import express from "express";
import config from "./shared/config/index.js";
import userRouter from "./api.js";


const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Login-Register! 🔐")
})

app.use(userRouter)

app.listen(config.port, () => {
    console.log(`Server is running on http://${config.host}:${config.port}`)
})

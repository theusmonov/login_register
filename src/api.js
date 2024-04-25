import {Router} from "express";
import authRouter from "./modules/auth/_api.js";

const mainRouter = Router();

mainRouter.use('/api/',authRouter);

export default mainRouter;
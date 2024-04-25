import {Router} from "express";
import {postRegister} from "./_controller.js";
import validateMiddleware from "../../shared/middleware/validate-middleware.js";
import registerSchema from "./_schema-validation.js";

const authRouter = Router();

authRouter.post("/auth/sign-up",  validateMiddleware(registerSchema),postRegister);

export default authRouter;
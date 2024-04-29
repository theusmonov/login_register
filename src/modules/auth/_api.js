import {Router} from "express";
import validateMiddleware from "../../shared/middleware/validate-middleware.js";
import registerSchema from "./_schema-validation.js";
import {PostRegister} from "./_controller.js";

const authRouter = Router();

authRouter.post("/auth/sign-up",  validateMiddleware(registerSchema), PostRegister);

export default authRouter;
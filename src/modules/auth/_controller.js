import {userRegister} from "./user-register.js";


export const postRegister = async (req, res, next) => {
    try {
        const data = await userRegister(req.body);
        return res.status(201).json({data, message: "Registration is complete"});
    } catch (err) {
        next(err)
    }
};

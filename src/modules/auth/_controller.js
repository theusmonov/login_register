import {userRegister} from "./user-register.js";


export const postRegister = async (req, res) => {
    try {
        const data = await userRegister(req.body);
        return res.status(201).json({data, message: "Register successfully"});
    } catch (err) {
        return res.status(500).json(err.message);
    }
}
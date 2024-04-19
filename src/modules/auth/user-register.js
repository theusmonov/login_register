import {UserModel} from "../../model/index.js";
import bcrypt from "bcrypt";

export const userRegister = async (data) => {
    const {firstname, lastname, email, password} = data;

    const checkEmail = await UserModel.findOne({
        where: {
            email: email
        }
    })
    if(checkEmail){
        throw new Error(`Email is already registered.`)
    }

    const hashPassword = await bcrypt.hashSync(password, 10);

    return await UserModel.create({...data, password: hashPassword});

}
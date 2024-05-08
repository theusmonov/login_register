import {UserModel} from "../../model/index.js";
import bcrypt from "bcrypt";
import {BadRequestError} from "../../shared/errors/classes.js";
import {jwtSignToken} from "../../shared/utils/helper.js";



export const userRegister = async (data) => {
    const {firstname, lastname, email, password} = data;

    if(!firstname || !lastname || !email || !password){
        throw new BadRequestError('First name is required');
    }

    const checkEmail = await UserModel.findOne({
        where: {
            email: email
        }
    });

    if(checkEmail){
        throw new BadRequestError(`Already registered with this email`)
    }

    const hashPassword = await bcrypt.hashSync(password, 10);
    const token = jwtSignToken.sign({email, password}, {expiresIn: "1d"});
    const newUser = await UserModel.create({...data, password: hashPassword});
    return {newUser, token}
}
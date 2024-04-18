import { UserModel } from "../../model/index.js";


async function addUser(data) {
    const {email, password} = data;

    const checkEmailUsers = await UserModel.findOne({email})
    
}
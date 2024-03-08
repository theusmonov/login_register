import {SignUpsignInModel} from "../../../model/signUpsignIn.model.js";


export const addUser = async ({body}) => {
    const {email, password} = body;

    const existUser = await SignUpsignInModel.findOne({email});
    if(existUser){
        throw new Error("Bu emaildagi user mavjud!")
    }

}
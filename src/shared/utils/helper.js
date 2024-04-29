import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/index.js";


export const bcryptHash = {
    hash: (password) => {
        return bcrypt.hashSync(password, 10);
    },
    compare: (password, passwordHash) => {
        return bcrypt.compareSync(password, passwordHash);
    }
}


export const jwtSignToken = {
    sign: (payload) => {
         return jwt.sign(payload, config.jwt.secret);
    }
}


export const jwtVerifyToken = {
    verify: (payload) => {
         try {
             return jwt.verify(payload, config.jwt.secret);
         } catch (e) {
             console.error('JWT malumot yechib olishdagi xatolik', e.message);
             return null;
         }
    }
}
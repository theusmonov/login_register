import Joi from 'joi';
import {password} from "pg/lib/defaults.js";

const registerSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    email: Joi.string().email({
        minDomainSegments: 2, tlds: {allow: ['com', 'net']}
    }).required(),
    password: Joi.string().pattern(new RegExp('^(?=.*[A-Z])(?=.*[A-Z])$')),
})

export default registerSchema;
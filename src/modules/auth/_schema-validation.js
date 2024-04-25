import Joi from 'joi';

const registerSchema = Joi.object({
    firstname: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.min': 'There should not be less than 3',
            'string.max': 'There should be no more than 30',
            'string.empty': 'Firstname should not be empty',
        }),
    lastname: Joi.string()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({
            minDomainSegments: 1
        }).allow('com')
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$'))
        .required(),
}).options({ abortEarly: false });

export default registerSchema;

import {BadRequestError} from "./classes.js";


export const errorHandler = (err, req, res, next) => {
    let status = 500;

    if (err instanceof BadRequestError) status = 400;
    res.status(status).json({ error: err.message });
};


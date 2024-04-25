export class BadRequestError extends Error {
    constructor(message) {
        super(message);
        if(Error.captureStackTrace){
            Error.captureStackTrace(this, BadRequestError);
        }
    }
}
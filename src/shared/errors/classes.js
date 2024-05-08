export class BadRequestError extends Error {
    constructor(message) {
        super(message);
        if(Error.captureStackTrace){
            Error.captureStackTrace(this.message = message, BadRequestError);
        }
    }
}

export class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        if(Error.captureStackTrace){
            Error.captureStackTrace(this.message = message, ForbiddenError);
        }
    }
}






const validateMiddleware = (data) => {
    return (req, res, next) => {
        try {
            const {error, value} = data.validate(req.body);
            if(error){
                res.status(500).send({error: error.message});
            }
            req.resalt = value
            next();
        } catch(err){
            console.log(err.message);
        }
    }
}

export default validateMiddleware;
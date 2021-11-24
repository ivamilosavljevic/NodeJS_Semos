const validateBody = async (req, res, next) => {

    const body = req.body;

    if(!body.color){
        res.status(400).json('Missing required field! ');
    }

    return next();
};

module.exports = validateBody;
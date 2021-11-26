const validateBody = async(req, res, next) => {
    const body = req.body;


if(!body.name || !body.hasCar || !body.isBoomer){
    return res.status(400).json('Missing required fields! ');
}
return next();
};


module.exports = validateBody;
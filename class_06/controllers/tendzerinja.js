const Tendzere = require('../models/Tendzere');

const getAllTendzerinja = async (req, res, next) => {
    try{
      const tendzerinja = await Tendzere.find();
      return res.status(200).json(tendzerinja);   //200 OK = Standard response for successful HTTP requests
    } catch (err){
        return res.status(500).json(err);   //500 Internal Server Error
    }

};

const addNewTendzere = async (req, res, next) => {
    const tendzereBody = req.body;

    const newTendzere = {
        color: tendzereBody.color,
    };

    try{
        await Tendzere.create(newTendzere);
        return res.status(201).json('Tendzere added!')      //201 successfully created
    } catch (err){
        return res.status(500).json(err);
    }

};

const updateTendzere = async (req, res, next) => {
    const id = req.params._id;
    const tendzereBody = req.body;
    
    const newTendzere = {
        color: tendzereBody.color,
    };

    try{
        await Tendzere.findByIdAndUpdate(id, newTendzere);
        return res.status(200).json('Updated tendzere!')
    } catch (err){
        return res.status(500).json(err);
    }
};


const deleteTendzere = async (req, res, next) => {
    const id = req.params._id;

    try{
        await Tendzere.findByIdAndDelete(id);
    } catch (err){
        return res.status(500).json(err);
    }

    return res.status(200).json('Deleted tendzere with ID: ' + id);
}


module.exports = {
    getAllTendzerinja,
    addNewTendzere,
    updateTendzere,
    deleteTendzere,
};
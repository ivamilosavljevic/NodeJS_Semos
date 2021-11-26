const Resident = require('../models/Resident');

//metodite
const getAllResidents = async(req, res, next) => {
    try{
    const residents = await Resident.find();
    return res.status(200).json(residents);
    } catch(err) {
        return res.status(500).json(err);
    }
};

const addResident = async(req, res, next) => {
    const residentBody = req.body;

    const newResident = {
    name: residentBody.name,
    hasCar: residentBody.hasCar,
    isBoomer: residentBody.isBoomer
    };

    try{
    await Resident.create(newResident);
    return res.status(201).json('New resident added!');    
    } catch(err){
        return res.status(500).json(err);
    }
};

const editResident = async(req, res, next) => {
    const id = req.params.ID;
    const residentBody = req.body;

    const newResident = {
        name: residentBody.name,
        hasCar: residentBody.hasCar,
        isBoomer: residentBody.isBoomer
        };

    try{
    await Resident.findByIdAndUpdate(id,newResident);
    return res.status(200).json('Updated resident!');    
    } catch(err){
        return res.status(500).json(err);
    }
};

const deleteResident = async(req, res, next) => {
  const id = req.params.ID;
    try{
        await Resident.findByIdAndDelete(id);
        return res.status(200).json('Deleted resident with ID:' + id);
    } catch(err){
        return res.status(500).json(err);
    }
};

module.exports = {
    getAllResidents,
    addResident,
    editResident,
    deleteResident
  };
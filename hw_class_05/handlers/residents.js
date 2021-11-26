const Resident = require('../models/Resident');


const getAllResidents = async (req, res, next) => {
    const residents = await Resident.getAllResidents();
    return res.status(200).json(residents);
};


const addResident = async (req, res, next) => {
    const residentBody = req.body;
    
    if (!residentBody.name || !residentBody.hasCar || !residentBody.isBoomer) {
        return res.status(400).json('Missing required fields!');
      }

 await Resident.addResident(residentBody);  //pocekaj da se dodade pa vrati status 200
 return res.status(200).json("New resident added!");
};


const editResident = async (req, res, next) => {
    const id = +req.params._id;
    const residentBody = req.body;

    if (!residentBody.name || !residentBody.hasCar || !residentBody.isBoomer) {
        return res.status(400).json('Missing required fields!');
      }

    await Resident.editResident(id, residentBody);
    return res.status(200).json('Resident edited!');
};


const deleteResident = async (req, res, next) => {
    const id = +req.params._id;

    await Resident.deleteResident(id);
    return res.status(200).json('Deleted resident!');
};


module.exports = {
    getAllResidents,
    addResident,
    editResident,
    deleteResident
};
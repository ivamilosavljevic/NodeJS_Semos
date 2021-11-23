const pets = [
    {
        id: 1,
        species: 'cat',
        name: 'Silvi'
    },
    {
        id: 2,
        species: 'dog',
        name: 'Laki'
    },
];

const getAllPets = async (req,res,next) => {
return res.status(200).json(pets);
}

const addNewPet = async (req, res, next) => {
    const body = req.body;
    const newPet = {
        id: pets.length + 1,
        species: body.species,
        name: body.name
    }
    pets.push(newPet);
    return res.status(200).json('Pet was added!');
}

module.exports = {
    getAllPets,
    addNewPet
}
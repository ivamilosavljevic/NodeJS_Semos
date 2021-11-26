
let residents = [
    {
        _id:1,
        name:"Iva Milosavljevic",
        hasCar: false,
        isBoomer: true,
    },
    {
        _id:2,
        name:"Ana Petkovic",
        hasCar: true,
        isBoomer: true,
    },
];

//models work with data from the handlers

const getAllResidents = async () => {
  return residents;
};

const addResident = async (newResidentInfo) => {
    const newResident = {
        _id: residents.length + 1,
        name: newResidentInfo.name,
        hasCar: newResidentInfo.hasCar,
        isBoomer: newResidentInfo.isBoomer
    };

 residents.push(newResident);
};

const editResident = async (_id, newResidentInfo) => {
    residents.map((resident) => {
        if (resident._id == id){
           return {
                _id: newResidentInfo.id,
                name: newResidentInfo.name,
                hasCar: newResidentInfo.hasCar,
                isBoomer: newResidentInfo.isBoomer
                  };
        } else {
            return resident;
        }
    });
};

const deleteResident = async (_id) => {
    residents = residents.filter((resident) => resident._id !== _id );
}



module.exports = {
    getAllResidents,
    addResident,
    editResident,
    deleteResident,
};
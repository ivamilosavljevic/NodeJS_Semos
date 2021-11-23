let planets = [
    {
        id: 1,
        name: 'Mercury',
        size: 120,
        distanceFromSun: 1200,
    },
];

//5 funkcii za 5te handleri vo index.js:
const getAllPlanets = async (req, resp, next) => {
    return resp.status(200).json(planets);
};

const getPlanetById = async (req, resp, next) => {
    const id = +req.params.id;  //converts string into a number with '+'
    const planet = planets.find((planet) => planet.id === id);
    
    if(planet){
        return resp.status(200).json(planet);
    }else{
        return resp.status(400).json('Planet does NOT exist!');
    }
};

const addNewPlanet = async (req, resp, next) => {
    const planetBody = req.body;

  if(!planetBody.name || !planetBody.size || !planetBody.distanceFromSun){
        return resp.status(400).json('Missing required fields! ');
    }
    const newPlanet = {
        id: planets.length + 1,
        size: planetBody.size,
        name: planetBody.name,
        distanceFromSun: planetBody.distanceFromSun
    };

 planets.push(newPlanet);
 return resp.status(200).json("Planet added successfully!");
};

const updatePlanet = async (req, resp, next) => {
    const id = +req.params.id;
    const planetBody = req.body;
    if(!planetBody.name || !planetBody.size || !planetBody.distanceFromSun){
        return resp.status(400).json('Missing required fields! ');
    }

    planets = planets.map((planet) => {
        if (planet.id === id){
            return {
                id: id,
                size: planetBody.size,
                name: planetBody.name,
                distanceFromSun: planetBody.distanceFromSun,
            };
        } else {
           return planet;
        }
    });
        return resp.status(200).json('Planet edited!');
};

const deletePlanet = async (req, resp, next) => {
    const id = +req.params.id;
    planets = planets.filter((planet) => planet.id !== id);

    return resp.status(200).json('Deleted planet!');
};

module.exports = {
getAllPlanets,
getPlanetById,
addNewPlanet,
updatePlanet,
deletePlanet
}
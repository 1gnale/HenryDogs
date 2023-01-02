const {getBreeds} = require("../utils")

const searchedBreed = async (req, res, next) => {
    const {name} = req.query
    if (name){
        const allBreeds = await getBreeds()
        const filtredBreed = allBreeds.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase()));
        filtredBreed.length > 0
        ? res.status(200).send(filtredBreed)
        : res.status(404).send(`Dog not found`);
    } else{
        next()
    }
}

module.exports ={
    searchedBreed,
}
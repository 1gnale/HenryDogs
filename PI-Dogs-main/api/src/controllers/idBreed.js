const {getBreeds} = require("../utils")

const idBreed = async (req, res) => {
    const {id} = req.params

    const allBreeds = await getBreeds()
    const filtredBreed = allBreeds.filter(e =>e.id == id);
    filtredBreed.length > 0
    ? res.status(200).send(filtredBreed)
    : res.status(404).send(`Dog not found`);
}

module.exports={
    idBreed,
}
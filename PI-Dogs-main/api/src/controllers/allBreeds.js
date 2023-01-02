const { getBreeds } = require("../utils")

const allBreeds = async (req, res) => {
    let results = await getBreeds()
    res.status(200).json(results)
}

module.exports = {
    allBreeds,
}
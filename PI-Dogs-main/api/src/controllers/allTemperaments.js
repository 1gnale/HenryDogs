const { getBreeds } = require("../utils")
const { Temperament } = require("../db")

const allTemperaments = async (req, res) => {
    try {
        const allBreeds = await getBreeds()
        const temperaments = allBreeds.map(e => e.temperament === undefined ?  "" : e.temperament + ", ")
        const splitedTemperaments = temperaments.reduce((acc, curr)=>{
            return acc.concat(curr)
        }).toString()
        .split(", ")
        splitedTemperaments.pop()
        splitedTemperaments.forEach(async (e) => {
            await Temperament.findOrCreate({ where: { name: e } })
        })
        const temperamentsDb = await Temperament.findAll()
        res.status(200).json(temperamentsDb)

    } catch (error) {
        res.status(404).json("Algo a salido mal")
    }
}


module.exports = {
    allTemperaments,
}
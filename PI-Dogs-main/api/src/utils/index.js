const axios = require("axios")
const {Dog, Temperament} = require("../db")

const getBreedsDB = async ()=>{
    const dbBreeds = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {
                attributes: [],
              },
        }
    })

    const dbBreedsClean = dbBreeds.map((e)=>{
        return{
            id: e.id,
            name: e.name,
            height: `${e.heightMin} - ${e.heightMax}`,
            weight: `${e.weightMin} - ${e.weightMax}`,
            lifeSpan: e.age,
            img: e.img,
            temperament: e.temperament
        }
    })

    return dbBreedsClean
}

const getBreedsApi = async ()=>{
    const apiBreeds = await axios.get("https://api.thedogapi.com/v1/breeds")
    const apiBreedsClean = apiBreeds.data.map((e)=>{
        return{
            id: e.id,
            name: e.name,
            height: e.height.metric,
            weight: e.weight.metric,
            lifeSpan: e.life_span,
            temperament: e.temperament,
            img: e.image.url
        }
    })
    return apiBreedsClean
}

const getBreeds = async ()=> {
    const dbBreeds = await getBreedsDB()
    const apiBreeds = await getBreedsApi()
    return [...dbBreeds, ...apiBreeds]
}

module.exports={
    getBreeds
}
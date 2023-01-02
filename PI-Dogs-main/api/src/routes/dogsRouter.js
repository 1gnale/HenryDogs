const { Router } = require("express")
const { allBreeds } = require("../controllers/allBreeds.js")
const { searchedBreed } = require("../controllers/searchedBreed")
const { idBreed } = require("../controllers/idBreed")
const { postDog } = require("../controllers/postDog")
const {validateDog} = require("../middlewares/validatePost")

const dogsRouter = Router()



dogsRouter.get("/", searchedBreed, allBreeds)

dogsRouter.get("/:id", idBreed)

dogsRouter.post("/",validateDog, postDog)


module.exports = dogsRouter
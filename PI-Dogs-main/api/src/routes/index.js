const { Router } = require('express');
const dogsRouter = require("./dogsRouter.js")
const temperamentsRouter = require("./temperamentsRouter")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const cors = require("cors");

router.options("*", cors({ origin: 'https://henry-dogs-y1x3.vercel.app', optionsSuccessStatus: 200 }));

 router.use(cors({ origin: "https://henry-dogs-y1x3.vercel.app", optionsSuccessStatus: 200 }));

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogsRouter)
router.use("/temperaments", temperamentsRouter)

module.exports = router;

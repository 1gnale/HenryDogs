const validateDog = (req, res, next) => {
    const {
        name, heightMin, heightMax, weightMin, weightMax, age, img, temperament
    } = req.body;
    const validUrl = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png))/i
    if (!name) return res.status(400).send(`Missing name`);
    if (!heightMin) return res.status(400).send(`Missing height`);
    if (!heightMax) return res.status(400).send(`Missing height`);
    if (!weightMin) return res.status(400).send(`Missing weight`);
    if (!weightMax) return res.status(400).send(`Missing weight`);
    if (!validUrl.test(img)) return res.status(400).send(`Invalid URL image`);
    if (!age) return res.status(400).send(`Missing life span`);
    if (!temperament) return res.status(400).send(`Missing temperament/s`)
    next()
}

module.exports={
    validateDog,
}
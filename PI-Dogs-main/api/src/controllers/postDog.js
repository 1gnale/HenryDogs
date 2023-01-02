const { Dog,} = require("../db")

const postDog = async (req, res) => {
  const { name, heightMin, heightMax, weightMin, weightMax, age, img, temperament } = req.body;
  try {
    const newDog = await Dog.create({ 
      name: name, 
      heightMin: heightMin, 
      heightMax: heightMax, 
      weightMin: weightMin, 
      weightMax: weightMax, 
      age: age, 
      img: img,
      temperament: temperament
    });
    res.status(201).send(`The dog, ${name}, was created successfully`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postDog,
}
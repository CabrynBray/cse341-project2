const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
const result = await mongodb.getDatabase().db().collection('cars').find();
    result.toArray().then((cars) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(cars);
    });
};

const getSingle = async (req, res) => {
   const carsId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('cars').find({ _id: carsId });
    result.toArray().then((cars) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(cars[0]);
    });
};

const createCar = async (req, res) => {
    const car = {
        Make: req.body.Make,
        Modle: req.body.Modle,
        Year: req.body.Year,
        Price: req.body.Price,
        Miles: req.body.Miles,
        Color: req.body.Color
    };
    const response = await mongodb.getDatabase().db().collection('cars').insertOne(car);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the car.');
    }
};


const updateCar = async (req, res) => {
    const carId = new ObjectId(req.params.id);
    const car = {
        Make: req.body.Make,
        Modle: req.body.Modle,
        Year: req.body.Year,
        Price: req.body.Price,
        Miles: req.body.Miles,
        Color: req.body.Color
    };
    const response = await mongodb.getDatabase().db().collection('cars').replaceOne({_id: carId}, car);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while updating the car.');
    }
};

const deleteCar = async (req, res) => {
    const carId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('cars').deleteOne({ _id: carId });
    if (result.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Error occurred when deleting car.')
    }
  };

module.exports = {
    getAll,
    getSingle,
    createCar,
    updateCar,
    deleteCar
};
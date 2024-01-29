const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');

const carsController = require('../controllers/cars');

router.get('/', validation.checkMongoId, carsController.getAll);

router.get('/:id', carsController.getSingle);

router.post('/', validation.checkCar, carsController.createCar);

router.put('/:id', validation.checkMongoId, carsController.updateCar);

router.delete('/:id', validation.checkMongoId, carsController.deleteCar);

module.exports = router;
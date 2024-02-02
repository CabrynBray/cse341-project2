const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');

const carsController = require('../controllers/cars');

const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', carsController.getAll);

router.get('/:id', validation.checkMongoId, carsController.getSingle);

router.post('/', isAuthenticated, validation.checkCar, carsController.createCar);

router.put('/:id', isAuthenticated, validation.checkMongoId, carsController.updateCar);

router.delete('/:id', isAuthenticated, validation.checkMongoId, carsController.deleteCar);



module.exports = router;
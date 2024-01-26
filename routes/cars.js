const express = require('express');
const router = express.Router();

const carsController = require('../controllers/cars');

router.get('/', carsController.getAll);

router.get('/:id', carsController.getSingle);

// router.post('/', carsController.createUser);

// router.put('/:id', carsController.updateUser);

// router.delete('/:id', carsController.deleteUser);

module.exports = router;
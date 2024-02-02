const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');

const buyersController = require('../controllers/buyers');

const { isAuthenticated } = require('../middleware/authenticate');


router.get('/', buyersController.getAll);

router.get('/:id', validation.checkMongoId, buyersController.getSingle);

router.post('/', isAuthenticated, validation.checkCar, buyersController.createBuyer);

router.put('/:id', isAuthenticated, validation.checkMongoId, buyersController.updateBuyer);

router.delete('/:id', isAuthenticated, validation.checkMongoId, buyersController.deleteBuyer);



module.exports = router;
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
const result = await mongodb.getDatabase().db().collection('buyers').find();
    result.toArray().then((buyers) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(buyers);
    });
};

const getSingle = async (req, res) => {
   const buyersId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('buyers').find({ _id: buyersId });
    result.toArray().then((buyers) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(buyers[0]);
    });
};

const createBuyer = async (req, res) => {
    const buyer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        car: req.body.car,
        soldDate: req.body.soldDate,
    };
    const response = await mongodb.getDatabase().db().collection('buyers').insertOne(buyer);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the buyer.');
    }
};


const updateBuyer = async (req, res) => {
    const buyerId = new ObjectId(req.params.id);
    const buyer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        car: req.body.car,
        soldDate: req.body.soldDate,
    };
    const response = await mongodb.getDatabase().db().collection('buyers').replaceOne({_id: buyerId}, buyer);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while updating the buyer.');
    }
};

const deleteBuyer = async (req, res) => {
    const buyerId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('buyers').deleteOne({_id: buyerId});
    if (response.deleteCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the buyer.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createBuyer,
    updateBuyer,
    deleteBuyer
};
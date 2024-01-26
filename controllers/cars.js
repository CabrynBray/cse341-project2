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

// const createCar = async (req, res) => {
//     const cars = {
//         Make: req.body.Make,
//         Modle: req.body.Modle,
//         Year: req.body.Year,
//         Price: req.body.Price,
//         Miles: req.body.Miles,
//         Color: req.body.Color
//     };
//     const response = await mongodb.getDatabase().db().collection('contacts').insertOne(user);
//     if (response.acknowledged) {
//         res.status(204).send();
//     } else {
//         res.status(500).json(response.error || 'Some error occurred while updating the user.');
//     }
// };


// const updateUser = async (req, res) => {
//     const userId = new ObjectId(req.params.id);
//     const user = {
//         // username: req.body.username,
//         // email: req.body.email,
//         // name: req.body.name,
//         // ipaddress: req.body.ipaddress
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         favoriteColor: req.body.favoriteColor,
//         birthday: req.body.birthday
//     };
//     const response = await mongodb.getDatabase().db().collection('contacts').replaceOne({_id: userId}, user);
//     if (response.modifiedCount > 0) {
//         res.status(204).send();
//     } else {
//         res.status(500).json(response.error || 'Some error occured while updating the user.');
//     }
// };

// const deleteUser = async (req, res) => {
//     const userId = new ObjectId(req.params.id);
//     const response = await mongodb.getDatabase().db().collection('contacts').deleteOne({_id: userId});
//     if (response.deleteCount > 0) {
//         res.status(204).send();
//     } else {
//         res.status(500).json(response.error || 'Some error occurred while deleting the user.');
//     }
// };

module.exports = {
    getAll,
    getSingle,
    // createUser,
    // updateUser,
    // deleteUser
};
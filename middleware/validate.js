const validator = require('../helpers/validate');

const checkCar = (req, res, next) => {
    const validationRule = {
        Make: 'required|min:1|max:20|string',
        Modle: 'required|min:1|max:20|string',
        Year: 'required|min:1|max:20|string',
        Price: 'required|min:1|max:20|string',
        Miles: 'required|min:1|max:20|string',
        Color: 'required|min:1|max:20|string',
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
             success: false,
             message: 'Validation failed',
             data: err
            }); 
        } else {
            next();
        }
    });
};

const checkMongoId = (req, res, next) => {
    const validationRule = {
      id: 'required|min:24|max:24|string'
    };
    validator(req.params, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  }

module.exports = {
    checkCar,
    checkMongoId
}
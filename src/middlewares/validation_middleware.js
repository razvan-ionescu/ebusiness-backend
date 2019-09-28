const Joi = require('@hapi/joi');
const { UNPROCESSABLE_ENTITY } = require('../utils/errors');

module.exports = schema => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    next(UNPROCESSABLE_ENTITY(error.message));
  } else {
    next();
  }
};
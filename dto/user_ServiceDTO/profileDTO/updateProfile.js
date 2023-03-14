const Joi = require('joi');
const schemaValidator = require('../../../middleware/testMiddleware');

//shema de de verification des donner en entré de la route
function updateProfileSchema(req, res, next) {

    const updateProfileSchema = Joi.object({
        // uuid: Joi.string().required(),
        email: Joi.string().email().lowercase(),
        lastname: Joi.string(),
        firstname: Joi.string(),
        username: Joi.string(),
        password: Joi.string(),
        oldPassword: Joi.string().min(8).allow(''),
        newPassword: Joi.string().min(8).allow(''),
        confirmPassword: Joi.string().min(8).allow(''),
        description: Joi.string(),
        work: Joi.string().allow(''),
        date_birth: Joi.date().iso(),
        city: Joi.string().min(8)
    });
    schemaValidator(req, updateProfileSchema, next);
}

module.exports = updateProfileSchema;
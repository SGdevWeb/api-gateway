const Joi = require('joi');
const schemaValidator = require('../middleware/schemaValidatorMiddleware');

const create = (req, res, next) => {
    const joiCreatecollaborators = Joi.object({
        project_uuid : Joi.string().required().min(3).max(50),
        collaborators:  Joi.array()
        // date_start: Joi.date().required().iso(),
        // date_end : Joi.date().iso(),
        // description : Joi.string().required().max(255),
        //type : Joi.string().required().length(32),
    });
    schemaValidator(req, joiCreatecollaborators, next);
}

module.exports = {
    create,
}
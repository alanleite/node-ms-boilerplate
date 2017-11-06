const Joi = require('joi')

module.exports.getOne = function () {
    return {
        params: {
            sid: Joi.string().min(7).max(14).required()
        }
    }
}

module.exports.create = function () {
    return {
        payload: {
            first_name: Joi.string().required(),
            last_name: Joi.string(),
            address: Joi.string(),
            city: Joi.string(),
            state: Joi.string().max(2),
            postal_code: Joi.string().max(20)
        }
    }
}

module.exports.update = function () {
    return {
        params: {
            sid: Joi.string().min(7).max(14).required()
        },
        payload: {
            first_name: Joi.string().required(),
            last_name: Joi.string(),
            address: Joi.string(),
            city: Joi.string(),
            state: Joi.string().max(2),
            postal_code: Joi.string().max(20)
        }
    }
}

module.exports.delete = function () {
    return {
        params: {
            sid: Joi.string().min(7).max(14).required()
        }
    }
}
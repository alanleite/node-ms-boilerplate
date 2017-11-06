const Joi = require('joi')

module.exports.getOne = function () {
    return {
        params: {
            sid: Joi.string().min(7).max(14).required()
        }
    }
}

module.exports.getMany = function () {
    return {
        params: {
            customer_sid: Joi.string().min(7).max(14).required()
        }
    }
}

module.exports.create = function () {
    return {
        params: {
            customer_sid: Joi.string().min(7).max(14).required()
        },
        payload: {
            order_date: Joi.date(),
            shippedDate: Joi.date(),
            ship_address: Joi.string(),
            ship_city: Joi.string(),
            ship_state: Joi.string().max(2),
            ship_postal_code: Joi.string().max(20)
        }
    }
}

module.exports.update = function () {
    return {
        params: {
            sid: Joi.string().min(7).max(14).required()
        },
        payload: {
            order_date: Joi.date(),
            shippedDate: Joi.date(),
            ship_address: Joi.string(),
            ship_city: Joi.string(),
            ship_state: Joi.string().max(2),
            ship_postal_code: Joi.string().max(20)
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
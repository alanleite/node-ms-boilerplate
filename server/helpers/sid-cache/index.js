const redisClient = require('redis-connection')()
const db = require('./../database')
const eh = require('./error-handler')
const KnownError = eh.KnownError

// Use this only in development!
const checkFromDatabase = function (sid, table) {
    return new Promise((resolve, reject) => {
        db[table].query((qb) => {
            qb.where('sid', sid)
        }).fetch({
            columns: ['id']
        }).then((model) => {
            if (!model) {
                return reject(new KnownError('Registry not found.', 'notFound'))
            } else {
                redisClient.set(sid, model.id.toString())
                return resolve(model.id)
            }
        }).catch(reject)
    })
}

const checkWithRedis = function (sid, table) {
    return new Promise((resolve, reject) => {
        if (sid) {
            redisClient.get(sid, (err, id) => {
                if (err || !id) {
                    // This should never run... 
                    // Load sid's from its tables before the app starts, and ideally update Redis when models are created...
                    checkFromDatabase(sid).then((modelId) => {
                        if (!modelId) {
                            return reject(new KnownError('Registry not found.', 'notFound'))
                        } else {
                            redisClient.set(sid, modelId)
                            resolve(modelId)
                        }
                    }).catch(reject)
                } else {
                    return resolve(parseInt(id))
                }
            })
        } else {
            return reject(new KnownError('Registry not found.', 'notFound'))
        }
    })
}

module.exports.translate = function (sid, table) {
    if (process.env.REDIS_ENABLED) {
        return checkWithRedis(sid, table)
    } else {
        return checkFromDatabase(sid, table)
    }
}

const redisClient = require('redis-connection')()

const validate = function (decoded, request, callback) {
    if (request.app.debug) {
        callback(null, true)
    } else {
        redisClient.get(decoded.user_id, (err, session) => {
            if (err || !session || session === '') {
                callback(null, false)
            } else {
                callback(null, true)
            }
        })
    }
}

module.exports = function (server) {
    server.auth.strategy('jwt', 'jwt', {
        key: process.env.JWT_SECRET,
        validateFunc: validate,
        verifyOptions: {
            ignoreExpiration: false,
            algorithms: ['HS256']
        }
    })

    server.auth.default('jwt')
}

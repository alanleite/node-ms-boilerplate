const hapi = require('hapi')

// if you need CORS
let cors = {}
cors.origin = cors.origin || ["*"]
cors.headers = cors.headers || ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"]
cors.additionalHeaders = cors.additionalHeaders || ['Access-Control-Allow-Origin']

const server = new hapi.Server({
    connections: {
        routes: {
            cors
        }
    }
})

server.connection({ port: process.env.PORT || 3000 })

server.register(require('./structure/server.plugins'), err => {
    if (err) { throw err }
    require('./structure/server.auth')(server)
    require('./structure/server.routes')(server)
})

module.exports = server
module.exports = function (server) {
    server.route(require('./../shared/customers/routes'))
    server.route(require('./../shared/orders/routes'))
}
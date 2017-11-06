const config = require('./../../knexfile')
const knex = config[process.env.NODE_ENV || 'development']
const bookshelf = require('bookshelf')(knex)

// load models...
bookshelf.Customers = require('./../shared/customers/model')(bookshelf)
bookshelf.Orders = require('./../shared/orders/model')(bookshelf)

module.exports = bookshelf

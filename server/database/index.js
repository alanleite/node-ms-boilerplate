const config = require('./../../knexfile')

const knex = require('knex')({
  client: 'database',
  connection: {
    host     : '127.0.0.1',
    user     : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test',
    charset  : 'utf8'
  },
    migrations: {
    tablename: 'migrations'
  }
}

const bookshelf = require('bookshelf')(knex)

bookshelf.plugin(require('registry'))
bookshelf.plugin(require('visibility'))
bookshelf.plugin(require('bookshelf-paranoia'))
bookshelf.Customers = require('./../shared/customers/model')(bookshelf)
bookshelf.Orders = require('./../shared/orders/model')(bookshelf)

module.exports = bookshelf

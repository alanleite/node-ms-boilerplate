const config = require('./../../knexfile')

const knex = require('knex')(config.development)

const bookshelf = require('bookshelf')(knex)

bookshelf.plugin('registry')
bookshelf.plugin('visibility')

module.exports = bookshelf

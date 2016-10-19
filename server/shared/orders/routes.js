const validators = require('./validators.js')
const getOne = require('./controllers/get-one.js')
const getMany = require('./controllers/get-many.js')
const create = require('./controllers/create.js')
const destroy = require('./controllers/delete.js')
const update = require('./controllers/update.js')

module.exports = [
  {
    path: '/orders/{sid}',
    method: 'get',
    config: {
      handler: getOne,
      validate: validators.getOne()
    }
  },
  {
    path: '/orders/{customer_sid}',
    method: 'get',
    config: {
      handler: getMany,
      validate: validators.getMany()
    }
  },
  {
    path: '/orders/{customer_sid}',
    method: 'put',
    config: {
      handler: create,
      validate: validators.create()
    }
  },
  {
    path: '/orders/{sid}',
    method: 'post',
    config: {
      handler: update,
      validate: validators.update()
    }
  },
  {
    path: '/orders/{sid}',
    method: 'delete',
    config: {
      handler: destroy,
      validate: validators.destroy()
    }
  }
]

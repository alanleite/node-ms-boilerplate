const db = require('./../../../database')
const errHandler = require('./../../../engines/error-handler')

module.exports = function (request, reply) {
  db.Customers.forge(request.payload).save().then((model) => {
    reply(model)
  }).catch((err) => {
    errHandler.resolve(request, reply, err)
  })
}

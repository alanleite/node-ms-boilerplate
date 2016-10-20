const db = require('./../../../database')
const errHandler = require('./../../../engines/error-handler')

module.exports = function (request, reply) {
  return db.Customers.query((qb) => {
    qb.orderBy('nome', 'ASC')
  }).fetchAll().then((model) => {
    reply(model)
  }).catch((err) => {
    errHandler.resolve(request, reply, err)
  })
}

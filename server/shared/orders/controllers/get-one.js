const db = require('./../../../database')
const errHandler = require('./../../../engines/error-handler')
const sidCache = require('./../../../engines/sid-cache')

module.exports = function (request, reply) {
  sidCache.translate(request.params.sid, 'Orders').then((id) => {
    return db.Orders.query((qb) => {
      qb.where('id', id)
    }).fetch()
  }).then((model) => {
    reply(model)
  }).catch((err) => {
    errHandler.resolve(request, reply, err)
  })
}

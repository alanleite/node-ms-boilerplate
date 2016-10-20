const db = require('./../../../database')
const errHandler = require('./../../../engines/error-handler')
const sidCache = require('./../../../engines/sid-cache')

module.exports = function (request, reply) {
  sidCache.translate(request.params.sid, 'Orders').then((id) => {
    request.payload.updated_by = request.auth.credentials.id
    request.payload.updated_at = new Date()
    return db.Orders.forge({ id: id }).save(request.payload)
  }).then(() => {
    reply({ success: true })
  }).catch((err) => {
    errHandler.resolve(request, reply, err)
  })
}

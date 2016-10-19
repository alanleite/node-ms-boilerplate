module.exports.resolve = function (request, reply, error) {
    if (error.ctype) {
        reply[error.ctype]('Error', error.message)
    } else {
        reply.badImplementation('Server error', error)
    }
}

module.exports.KnownError = function (message, ctype) {
    this.message = (message || "")
    this.ctype = (ctype || 'badImplementation')
}
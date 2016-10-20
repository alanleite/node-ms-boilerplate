let db = require('./../../database')

require('./../orders/model');

module.exports = db.model('Customer', {
    tableName: 'customers',
    softDelete: true,
    hasTimestamps: true,
    hidden: ['id', 'created_by', 'updated_by', 'deleted_by', 'created_at', 'updated_at', 'deleted_at'],
    orders: function () {
        return this.hasMany('Order');
    }
});
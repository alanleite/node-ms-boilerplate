let db = require('./../../database')

require('./../orders/model');

module.exports = db.model('Customer', {
    tableName: 'customers',
    hidden: ['id', 'created_at', 'updated_at'],
    orders: function () {
        return this.hasMany('Order');
    }
});
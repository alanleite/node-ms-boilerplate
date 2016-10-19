let db = require('./../../database')

require('./../customers/model');

module.exports = db.model('Order', {
    tableName: 'orders',
    hidden: ['id', 'created_at', 'updated_at'],
    customer: function () {
        return this.belongsTo('Customer');
    }
});
let db = require('./../../database')

require('./../customers/model');

module.exports = db.model('Order', {
    tableName: 'orders',
    softDelete: true,
    hasTimestamps: true,
    hidden: ['id', 'created_by', 'updated_by', 'deleted_by', 'created_at', 'updated_at', 'deleted_at'],
    customer: function () {
        return this.belongsTo('Customer');
    }
});
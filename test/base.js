const shortid = require('shortid')
let Customer = require('./../server/shared/customers/model')
let Order = require('./../server/shared/orders/model')

/*
Customer.forge({
    'sid': shortid.generate(),
    'first_name': 'Ben',
    'last_name': 'Miller',
    'address': '101 Candy Rd.',
    'city': 'Redmond',
    'state': 'WA',
    'postal_code': '98052'
}).save().then((customer) => {
    return Order.forge({
        'sid': shortid.generate(),
        'customer_id': customer.id,
        'order_date': new Date(),
        'shippedDate': null,
        'ship_address': '10203 Acorn Avenue',
        'ship_city': 'Calgary',
        'ship_state': 'AB',
        'ship_postal_code': 'T2P 2G8'
    }).save()
}).then(() => {
    return Customer.fetchAll({
        withRelated: ['orders']
    })
}).then((result) => {
    console.log(result)
}).catch(console.error)
*/


Customer.fetchAll({
    withRelated: ['orders']
}).then((result) => {
    console.log('Result', result.models[1].toJSON())
}).catch(console.error)

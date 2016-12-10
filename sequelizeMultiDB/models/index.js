'use strict'

var db1 = require('./_dbs').db1();
var db2 = require('./_dbs').db2();

module.exports = {
	Users: db1.import('./users'),
	Orders: db2.import('./orders'),
	V_Orders: db2.import('./v_orders')
}

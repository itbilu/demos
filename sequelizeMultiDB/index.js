'use strict'

const sequelize = require('sequelize');
const Users = require('./models').Users;
const Orders = require('./models').Orders;
const V_Orders = require('./models').V_Orders;

// 定义模型关系
Users.hasMany(Orders, {foreignKey: 'userId'});
Orders.belongsTo(Users, {foreignKey: 'userId'}); 

/*-- Create 多数据库数据插入 --*/

// 单模型方式插入
// Users.create({name:'张小三', sex:1}).then(function (user) {
// 	return Orders.create({userId:user.id, total:199})
// }).then(function (order) {
// 	console.log(order);
// })

// 两个模型在不同一个数据库，会插入失败
// Users.sequelize.transaction(function(t) {
// 	return Users.create({name:'李小四', sex:1}, {transaction:t}).then(function (user) {
// 		return Orders.create({userId:user.id, total:199}, {transaction:t})
// 	})
// }).then(function (results) {
// 	console.log(results)
// })

// 添加数据库前缀执行事务，执行成功
// Users.sequelize.transaction(function(t) {
// 	return Users.create({name:'李小四', sex:1}, {transaction:t}).then(function (user) {
// 		return Users.sequelize.query('INSERT INTO `db2`.`orders` (`userid`, `total`) VALUES($1, $2)', {bind:[user.id, 199], transaction:t})
// 	})
// }).then(function (results) {
// 	console.log(results)
// })

/*-- Select 多数据库数据查询 --*/
// 基于关系模型的数据查询
// hasMany 关系查询	
// Users.findOne({name:'张小三'}).then(function (user) {
// 	return user.getOrders({raw:true})
// }).then(function (userOrders) {
// 	console.log(userOrders)
// })

// belongsTo关系查询-连接查询，查询失败
// let include = [{
// 	model: Users, 
//   required: false,
//   attributes: ['id', 'name']
// }];
// Orders.findAll({include:include}).then(function (orders) {
// 	console.log(orders);
// })

// 通过 query 方法直接进行连接查询，查询成功
// Orders.sequelize.query('SELECT `Order`.`id`, `Order`.`userId`, `Order`.`total`, `User`.`id` AS `User.id`, `User`.`name` AS `User.name` FROM `orders` AS `Order` LEFT OUTER JOIN `db1`.`users` AS `User` ON `Order`.`userId` = `User`.`id`', {model:Users}).then((results) => {
// 	console.log(results)
// })

// 通过视图实现查询
V_Orders.findAll({raw:true}).then((results) => {
	console.log(results);
});

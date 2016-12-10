'use strict'

var Sequelize=require('sequelize');

// 数据库1 实例
exports.db1 = function () {
	var sequelize=new Sequelize(
		'db1', 'root', '111111', 
		{
			logging: console.log, 
			timezone: '+08:00' 
		});

	return sequelize;
}

// 数据库2 实例
exports.db2 = function () {
	var sequelize=new Sequelize(
		'db2', 'root', '111111', 
		{
			logging: console.log, 
			timezone: '+08:00' 
		});

	return sequelize;
}
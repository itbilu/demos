'use strict'

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Users', {
		id:{type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true},
		name: { type: DataTypes.STRING, comment:'姓名' },
		sex: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0, comment:'性别' }
	},
	{
		timestamps: false,
		underscore: false,
		freezeTableName: true,
		tableName: 'users',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}

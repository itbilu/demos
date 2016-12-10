'use strict'
'use strict'

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('V_Order', {
		id: { type: DataTypes.BIGINT(11), autoIncrement: true, primaryKey: true, unique: true, comment:'主键' },
		userId: {type: DataTypes.BIGINT(11), allowNull: false, comment:'用户Id' },
		total: { type: DataTypes.DECIMAL(10, 2), allowNull: false, comment:'订单总额' },
		name: { type: DataTypes.STRING, comment:'姓名' },
	},
	{
		underscore: false,
		timestamps: false,
		freezeTableName: true,
		tableName: 'v_orders',
		comment: '订单视图',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}

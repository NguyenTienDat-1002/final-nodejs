//const dbConfig = require('../config/db.config');
const { Sequelize, DataTypes } = require('sequelize');
//const sequelize = new Sequelize( dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect
//});

const sequelize = require('./Sequelize');
const User = require('./User');
const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },

        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                key: 'id',
                model: User,
            }
        },
        
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        phone: {
            type: DataTypes.STRING(10),
        },

        status:{
            type: DataTypes.STRING(20),
        },

        order_date: {
            type: DataTypes.DATE
        },

        deliver_date: {
            type: DataTypes.DATE,
        }
    },{
        timestamps: false,
        tableName: 'Order',
    }
);

//Order.belongsTo(User);
//Order.hasMany(Order_Detail);
///console.log(sequelize.models);
module.exports = Order;

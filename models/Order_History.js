const {Sequelize, DataTypes, Model} = require('sequelize');
const Order = require('./Order');
//const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
//    host: dbConfig.HOST,
//    dialect: dbConfig.dialect,
//});
const sequelize = require('./Sequelize');

const Order_History =  sequelize.define('Order_History',{
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true, 
    },

    order_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            key: 'id',
            model: Order,
        }
    },

    modify_date: {
        type: DataTypes.DATE,
    },

    status:{
        type: DataTypes.STRING,
    }
},{
        tableName: 'Order_History',
        timestamp: false,

    }
);

module.exports = Order_History;
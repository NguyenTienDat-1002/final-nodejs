//const dbConfig = require('../config/db.config');
const {Sequelize, DataTypes, Model} = require('sequelize');
const User = require('./User');
const Product = require('./Product');
//const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
//    host: dbConfig.HOST,
//    dialect: dbConfig.dialect,
//});
const sequelize = require('./Sequelize');

const Cart_Item = sequelize.define('Cart_Item',{
        
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                key: 'id',
                model: User,
            },
            primaryKey: true,
        },

        product_id: {
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                key: 'id',
                model: Product,
            }
        },
    
        product_quantity: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0,
        },

        price: {
            type: DataTypes.DECIMAL(6,2),
            defaultValue: 0,
        }
    },{
        timestamps: false,
        tableName: 'Cart_Item',
    }
);
//console.log(sequelize.models)

module.exports = Cart_Item;
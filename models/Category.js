//const dbConfig = require('../config/db.config');
const {Sequelize, DataTypes} = require('sequelize');
//const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
//    host: dbConfig.HOST,
//    dialect: dbConfig.dialect,
//});

const sequelize = require('./Sequelize');

const Category = sequelize.define('Category',{
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },{
        tableName: 'Category',
        timestamps: false,
    }
);

//Category.hasMany(Product);
//console.log(sequelize.models)

module.exports = Category;
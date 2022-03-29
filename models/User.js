//const dbConfig = require('../config/db.config');
const {Sequelize, DataTypes} = require('sequelize');
//const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
//    host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//});
const sequelize = require('./Sequelize');

const User = sequelize.define('User',{
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },

        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        password: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        role: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    },
    {
        tableName: 'User',
        timestamps: false,
    }
);

//User.hasOne(Cart);
//User.hasMany(Order);

//console.log(sequelize.models)

//console.log(Order === sequelize.models.Order);
module.exports = User;

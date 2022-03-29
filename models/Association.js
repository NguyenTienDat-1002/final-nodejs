const sequelize = require('./Sequelize');

const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const Order_Detail = require('./Order_Detail');
const Category = require('./Category');
const Cart_Item = require('./Cart_Item');
const Order_History = require('./Order_History');

Category.hasMany(Product,{foreignKey: 'category_id' , sourceKey: 'id'});
Product.belongsTo(Category,{foreignKey: 'category_id' , targetKey: 'id'});

User.hasMany(Order, {foreignKey: 'user_id', sourceKey: 'id'});
Order.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id'});

Order.hasMany(Order_Detail, {foreignKey: 'OrderId', sourceKey: 'id'});
Order_Detail.belongsTo(Order, { foreignKey: 'OrderId', targetKey: 'id'});

Product.hasMany(Order_Detail, {foreignKey: 'ProductId' , sourceKey: 'id'});
Order_Detail.belongsTo(Product, {foreignKey: 'ProductId', targetKey: 'id'});

Order.belongsToMany(Product,{ through: 'Order_Detail', sourceKey: 'id', targetKey:'id'});
Product.belongsToMany(Order, { through: 'Order_Detail', sourceKey: 'id', targetKey:'id'});

User.hasMany(Cart_Item, {foreignKey: 'user_id', sourceKey:'id'});
Cart_Item.belongsTo(User, {foreignKey:'user_id', targetKey:'id'});

Product.hasMany(Cart_Item,{foreignKey: 'product_id', sourceKey:'id'});
Cart_Item.belongsTo(Cart_Item, {foreignKey: 'product_id', sourceKey: 'id'});

Order.hasMany(Order_History,{foreignKey: 'order_id', sourceKey: 'id'});
Order_History.belongsTo(Cart_Item, {foreignKey: 'order_id', sourceKey: 'id'});

module.exports = { User, Product, Order, Order_Detail, Category, Cart_Item, Order_History}
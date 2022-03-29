const models = require('../models/Association');

module.exports = async(req,res)=>{
    const Products = await models.Product.findAll();
    res.status(200).json(Products);
}
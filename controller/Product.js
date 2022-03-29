const models = require('../models/Association');

module.exports = {
    getProductById: async(req,res) => {
        const Product = await models.Product.findOne({
            where: {id: req.params.id},
            include: models.Category
        });

        res.status(200).json(Product);
    },

    getProductsByCategory: async(req,res) =>{
        const Products =await models.Category.findAll({include: models.Product});

        res.status(200).json(Products);
    },

    orderProduct: async(req,res) => res.status(200)
}
const path = require('path');
const models = require('../models/Association');
const User = require('./User');

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

    orderProduct: async(req,res) => res.status(200),

    addProduct: async(req,res)=>{
        try{
            
             const record = await models.Product.create({
                 name: req.body.name,
                 price: req.body.price
             });
            let image = req.files.file;
            console.log(image);
            image.mv(path.resolve(__dirname,'..','public/pics',record.id+path.extname(req.files.file.name)), async(error)=>{
               return;
            })
            res.status(200).json({result: 'successful'});
        }catch{
            res.status(200).json({result: 'failed'});
        }
    },

    deleteProduct: async(req,res)=>{
        try{ 
            await models.Product.destroy({
                where:{
                    id: req.params.id
                }
            });
            res.status(200).json({result: 'successful'});
        }catch{
            res.status(200).json({result: 'failed'});
        }

    },

    editProduct: async(req,res)=>{
        try{
            await Product.update({
                name: req.params.name,
                price: req.params.price
            },{
                where:{
                id: req.params.productid
            }});
            res.status(200).json({result:'successful'});
        }catch{
            res.status(200).json({result: 'failed'});
        }
    }

}
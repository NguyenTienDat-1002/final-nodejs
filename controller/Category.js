const models = require('../models/Association');

module.exports={
    getAllCategories: async (req,res)=> res.status(200).json(await models.Category.findAll()),


}
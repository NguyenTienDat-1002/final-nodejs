const models = require('../models/Association');

module.exports = async (req,res)=>{
    const Cart = await models.Cart_Item.findAll({where: {user_id: req.params.id}});
    res.status(200).json(Cart);
}
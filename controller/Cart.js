const models = require('../models/Association');
const {getUserId} = require('../controller/getUserId');
module.exports = {
    getCart:()=>{
        let id = getUserId();
      return id;   
    },
    addCart: async (req,res)=>{
        const rows = await models.Cart_Item.findOne({where:{
            user_id: 1,
            product_id: 1
        }});
        if(rows)
        try{
            const record = await models.Cart_Item.create({
                    user_id: req.body.userid,
                    product_id:  req.body.productid,
                    
                });
        }catch{
            res.status(200).json({result: 'failed'});
        }
        else
            return res.status(200).json({result: 'successful'});
        //if(product)
        //   return res.status(200).json(product);
        //try{
        //    const record = await models.Cart_Item.create({
        //        userid: req.body.userid,
        //        productid:  req.body.productid
        //    });
        //    res.status(200).json({result: 'successful'});
        //}catch{
        //    res.status(200).json({result: 'failed'});
        //}
    }

    
}
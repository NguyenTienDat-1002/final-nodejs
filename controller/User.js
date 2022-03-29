const models = require('../models/Association');
const jwt = require("jsonwebtoken");
module.exports ={
    storeUser: async function (req, res) {
        //console.log(req.body.username);
        try{
            const record = await models.User.create({
                username: req.body.username,
                password: req.body.password,
                first_name:  req.body.first_name,
                last_name: req.body.last_name
            });
            res.status(200).json({result: 'successful'});
        }catch{
            res.status(200).json({result: 'failed'});
        }

    },
    Login: async function(req,res){
        try{
            const Account = await models.User.findOne({ where: { username: req.body.username } });
            console.log(Account.password);
            if(req.body.password == Account.password){
                const { token } = await generateToken(accountInfor);
                res.status(200).json({result: 'successful',token,id:Account.dataValues.id});

            }else{
                res.status(200).json({result: 'failed'});
            }
            
        }catch{
            res.status(200).json({result: 'failed'});
        }
        
        
    }
    
}
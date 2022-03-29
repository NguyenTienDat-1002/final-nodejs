const models = require('../models/Association');
module.exports={
    getUserId: async ()=>{
        let Account = await models.User.findOne({ where: { username: 'dat', password : '12345'} });
        return Account.dataValues.id;
    }
}
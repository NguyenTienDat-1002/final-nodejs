const http =require('http');
const { Sequelize } = require('sequelize');
const server = http.createServer((req,res)=>{
    if(req.url =='/'){
    const sequelize = new Sequelize('login', 'root', '', {
       host: 'localhost',
       dialect: 'mysql',
    });
    const testcon = async(sequelize)=>{
       try {
           await sequelize.authenticate();
           console.log('Connection has been established successfully.');
       } catch (error) {
           console.error('Unable to connect to the database:', error);
       }
    }
    testcon(sequelize);
    sequelize.query("select * from user", {type: sequelize.QueryTypes.SELECT}).then((result) => res.end(JSON.stringify(result)))
    
    }
    
});

server.listen(3000, () => {
    console.log('http://localhost:3000');
})

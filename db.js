const conexion = require('./config/ConnectionDb');
//? Function for connect

async function connect(){
    await conexion.connect(error=>{
        if(error){
            throw error
        }
        else{
            console.log(['successful connection']);
        }
    });
}




module.exports = { 
    connect
};




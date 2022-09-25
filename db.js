const databaseConnection = require('./config/ConnectionDb');

async function connectDatabase(){
    try {
        await databaseConnection.authenticate();
        await databaseConnection.sync();
        await console.log("Connection with database established");
    } catch (error) {
        console.log("Couldn't stablish connection with database", {msg: error});
    }
}

module.exports = connectDatabase;



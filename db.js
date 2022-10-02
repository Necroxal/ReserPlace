const dbConfig = require('./config/db.config'); 
const Sequilize = require('sequelize'); //Import ORM(sequelize) to use model in mysql

//Connection ORM with mysql
const sequelize = new Sequilize(dbConfig.database, dbConfig.user, dbConfig.password,{
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: 0
})

const db = {};

db.Sequilize = Sequilize; // This is the main class, the entry point to sequelize.
db.sequelize = sequelize; //Add connection to object db

db.Place = require('./apiServices/places/model')(sequelize,Sequilize);


module.exports = db;



const dbConfig = require('./config/db.config');
const Sequilize = require('sequelize');


const sequelize = new Sequilize(dbConfig.database, dbConfig.user, dbConfig.password,{
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: true
})

const db = {};

db.Sequilize = Sequilize;
db.sequelize = sequelize;

db.Places = require('./apiServices/places/model')(sequelize,Sequilize);

module.exports = db;



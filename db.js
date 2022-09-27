const dbConfig = require('./config/db.config');
const Sequilize = require('sequelize');


const sequelize = new Sequilize(dbConfig.database, dbConfig.user, dbConfig.password,{
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: 0
})

const db = {};

db.Sequilize = Sequilize;
db.sequelize = sequelize;

db.Place = require('./apiServices/places/model')(sequelize,Sequilize);
db.User = require('./apiServices/users/model')(sequelize,Sequilize);

module.exports = db;



const dbConfig = require('./config/db.config');
const Sequelize = require("sequelize");

//Connection ORM with mysql
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./apiServices/users/model")(sequelize, Sequelize);

module.exports = db;
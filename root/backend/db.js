const dbConfig = require('./config/db.config');
const Sequelize = require("sequelize");

//Connection ORM with mysql
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password,{
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: 0
})

const db = {};

db.Sequelize = Sequelize; // This is the main class, the entry point to sequelize.
db.sequelize = sequelize; //Add connection to object db

db.Place = require('./apiServices/places/model')(sequelize,Sequelize);
db.User = require("./apiServices/users/model")(sequelize, Sequelize);
db.Reservation = require('./apiServices/reservation/model')(sequelize,Sequelize);

//foreign key to Reservation
db.User.belongsToMany(db.Place, {through: db.Reservation, foreignKey: 'user_id'})
db.Place.belongsToMany(db.User, {through: db.Reservation, foreignKey:'places_id'})

module.exports = db;


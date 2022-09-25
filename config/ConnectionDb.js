const dotenv = require('dotenv');
const Sequelize = require("sequelize");
dotenv.config();


const databaseConnection = new Sequelize(process.env.DATABASE, "admin", process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
});

module.exports = databaseConnection;

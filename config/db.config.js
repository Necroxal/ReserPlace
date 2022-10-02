const dotenv = require('dotenv');

dotenv.config();

//?Create conexion for database
const conexion = {
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    user: process.env.USER,
    dialect: 'mysql' //?specify database
};

module.exports = conexion;

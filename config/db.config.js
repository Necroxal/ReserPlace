const dotenv = require('dotenv');

dotenv.config();


const conexion = {
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    user: process.env.USER,
    dialect: 'mysql'
};

module.exports = conexion;

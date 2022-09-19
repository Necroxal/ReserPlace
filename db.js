const dotenv = require('dotenv');
const mysql = require('mysql');
dotenv.config();

const conexion = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    user: process.env.USER
});


module.exports = {conexion};



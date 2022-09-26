const dotenv = require('dotenv');
<<<<<<< HEAD:config/db.config.js
=======

dotenv.config();
>>>>>>> test:config/ConnectionDb.js

dotenv.config();


const conexion = {
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    user: process.env.USER,
    dialect: 'mysql'
};

module.exports = conexion;

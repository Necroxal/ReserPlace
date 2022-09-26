const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    user: process.env.USER,
    dialect: 'mysql'
};
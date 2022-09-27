require('dotenv').config();

const connection = {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    dialect: process.env.DIALECT,
}

module.exports = connection;

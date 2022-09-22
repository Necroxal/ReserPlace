const express = require('express'); //?Server express
const app = express();
const dotenv = require('dotenv'); //?For environment varibales in file .env
const {conexion,connect} = require('./db');//?Connection for bd in mysql
const routes = require("./routes/routes"); //? Import routes 

//? use dotenv
dotenv.config(); 

const PORT = process.env.PORT || 3000;

//?Use the route of file routes.js
routes(app); 

connect();

app.listen(PORT,  ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});


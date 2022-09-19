const express = require('express');
const dotenv = require('dotenv');
const {conexion} = require('./db');
//Funcion de routes
//const routes = require('./routes/routes');
dotenv.config();


const app = express();
const PORT = process.env.PORT;

conexion.connect(error=>{
    if(error)throw error
    else{
        console.log('Conexion exitosa');
    }
});

//Uso de las rutas(Recordar que lo que se exporta de routes.js es una funcion)
//routes(app); Este es el uso correcto para las rutas establecidas

app.listen(PORT,  ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});


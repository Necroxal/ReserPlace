const express = require('express');
const dotenv = require('dotenv');
const {conexion} = require('./db');
dotenv.config();


const app = express();
const PORT = process.env.PORT;

conexion.connect(error=>{
    if(error)throw error
    else{
        console.log('Conexion exitosa');
    }
});

app.listen(PORT,  ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});


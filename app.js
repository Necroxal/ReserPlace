const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const {conexion} = require('./db');
const routes = require("./routes/routes");
const PORT = process.env.PORT || 3000;


// Middleware

// Routes
app.use("/", routes);

// ↓ Commented for momentary local use without database
/* conexion.connect(error=>{
    if(error)throw error
    else{
        console.log('Conexion exitosa');
    }
}); */

//Uso de las rutas(Recordar que lo que se exporta de routes.js es una funcion)
//routes(app); Este es el uso correcto para las rutas establecidas

app.listen(PORT,  ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});


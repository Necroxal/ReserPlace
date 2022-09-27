const express = require('express'); //?Server express
const app = express();

const dotenv = require('dotenv'); //?For environment varibales in file .env
dotenv.config();

const cors = require("cors");
const bodyParser = require("body-parser");

const connectDatabase = require('./db');//?Connection for bd in mysql
const routes = require("./routes/routes"); //? Import routes 
const cookies = require('cookie-parser');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}) );

app.use(bodyParser.json());
app.use(cors());

app.use(cookies());


//?Use the route of file routes.js
routes(app); 

connectDatabase.sequelize.authenticate()
    .then(() => {
        console.log("connected to database");
    })
    .catch(error => {
        console.log("Unable to connect to database", {msg: error});
    })

app.listen(PORT,  ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});
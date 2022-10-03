const express = require('express'); //?Server express
const app = express();

const dotenv = require('dotenv'); //?For environment varibales in file .env
dotenv.config();

const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes/routes"); //? Import routes 
const cookies = require('cookie-parser');
const db = require('./db');

//read the environment variables in .env 
dotenv.config(); 

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}) );

app.use(bodyParser.json());
app.use(cors());

app.use(cookies());

//Parsing request body
app.use(express.json());
app.use(express.urlencoded({extended: false}) );

//initial database on sequelize
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
//&Function for the routes
routes(app); 

//Initial server
app.listen(PORT,  ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});
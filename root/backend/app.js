const express = require('express'); //?Server express
const app = express();
const routes = require("./routes/routes"); //? Import routes 
const cookies = require('cookie-parser');
const db = require('./db');
const dotenv = require('dotenv'); //?For environment varibales in file .env

//read the environment variables in .env 
dotenv.config(); 

const PORT = process.env.PORT || 3000;

//parsing req.body
app.use(express.json());
app.use(express.urlencoded({extended: false}) );

app.use(cookies()); //use cookies

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
    console.log(`Server ready on port: ${PORT}`);
});
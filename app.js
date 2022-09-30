const express = require('express'); //?Server express
const app = express();
const dotenv = require('dotenv'); //?For environment varibales in file .env
const db = require("./db");
const routes = require("./routes/routes"); //? Import routes 

//? use dotenv
dotenv.config(); 

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}) );


db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

routes(app); 


app.listen(PORT,  ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});


//*Aqui van las rutas de cada componente
//const account = require('');

//? Funcion que se encarga de manejar las rutas de los componentes

/*const routes = (server)=>{
    server.use('/account',account);  
}*/

//module.exports = routes;

const {
    userMainPage, 
    createUser, 
    userLogin
} = require("../controllers/users");

const express = require("express");
const router = express.Router();

router.get("/user", userMainPage);
router.post("/signup", createUser);
router.post("/login", userLogin);
// router.route("/places")  <- chain methods and their functions.

module.exports = router;
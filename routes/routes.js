const places = require('../apiServices/places/routes');
const users = require("../apiServices/users/routes");
const {verifyToken} = require("../apiServices/users/controller");

//&Fucntion to manage routes
//?The parameter is sent in index.js (main project)
const router = (app)=>{
    app.use('/place',places);
    app.use("/user", verifyToken);
    app.use("/", users)
}

module.exports = router;
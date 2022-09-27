const places = require('../apiServices/places/routes');
const users = require("../apiServices/users/routes");
const {verifyToken} = require("../apiServices/users/controller");
const cookieParser = require("cookie-parser");

//&Fucntion to manage routes
//?The parameter is sent in index.js (main project)
const router = (app)=>{
    app.use(cookieParser());
    app.use('/place',places);
    app.use("/", users, verifyToken);
}

module.exports = router;
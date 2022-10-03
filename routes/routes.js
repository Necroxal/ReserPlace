const places = require('../apiServices/places/routes');
const users = require("../apiServices/users/routes");
const {verifyToken} = require("../middleware/users");

//&Fucntion to manage routes
//?The parameter is sent in app.js (main project)
const router = (app)=>{
    app.use('/place',places);
    app.use("/user", verifyToken);
    app.use("/", users)
}

module.exports = router;
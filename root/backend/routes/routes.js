const places = require("../apiServices/places/routes");
const users = require("../apiServices/users/routes");
const {verifyToken} = require("../middleware/users");
const reservation = require('../apiServices/reservation/routes');
//&Fucntion to manage routes
//?The parameter is sent in app.js (main project)
const router = (app)=>{
    app.use('/place',places);
    app.use("/user", verifyToken);
    app.use("/reserv", reservation);
    app.use("/", users)
}

module.exports = router;
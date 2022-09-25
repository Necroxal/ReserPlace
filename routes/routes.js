const places = require('../apiServices/places/routes');
const users = require("../apiServices/users/routes");

//&Fucntion to manage routes
//?The parameter is sent in index.js (main project)
const router = (app)=>{
    app.use('/place',places);
    app.use("/", users);
}

module.exports = router;
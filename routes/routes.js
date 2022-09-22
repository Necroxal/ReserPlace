const places = require('../apiServices/places/routes');


//&Fucntion to manage routes
//?The parameter is sent in index.js (main project)
const router = (app)=>{
    app.use('/place',places);  
}


module.exports = router;
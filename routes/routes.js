const place = require('../apiServices/places/routes');
//&Fucntion to manage routes
//?The parameter is sent in app.js (main project)
const router = (app)=>{
    app.use('/place',place)
}
module.exports = router;
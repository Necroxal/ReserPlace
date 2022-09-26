const user = require('../apiServices/users/routes');

//&Fucntion to manage routes
//?The parameter is sent in index.js (main project)
const router = (app)=>{
    app.use('/user',user)
}
module.exports = router;
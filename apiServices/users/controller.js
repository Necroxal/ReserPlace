const db = require('../../db');
const User = db.User;
const response = require('../../utils/response');


const createUser = (req, res) => {
    // Validate request
    if (!req.body.email || !req.body.password || !req.body.name || !req.body.lastname ||!req.body.phone ||!req.body.state) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const user = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      lastname: req.body.lastname,
      phone: req.body.phone,
      state: req.body.state
    };
  
    // Save Tutorial in the database
    User.create(user)
      .then(data => {
        response.succes(req,res,data,201);;
      })
      .catch(err => {
        response.error(req,res,'Internal error',500,err);
      });
  };

module.exports = {
  createUser
}
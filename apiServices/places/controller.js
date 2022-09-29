const db = require('../../db');
const Place = db.Place;
const response = require('../../utils/response');
const fs = require('fs');

const create = (req, res) => {
  //Validate request
  if (!req.body.type || !req.body.description || !req.body.price  || !req.body.status_place || !req.body.state || !req.body.city || !req.body.adress) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  if (req.file == undefined) {
    return res.send('Image not found')
  }

  // Create a Tutorial
  const place = {
    type: req.body.type,
    description: req.body.description,
    price: req.body.price,
    status_place: req.body.status_place,
    state: req.body.state,
    city: req.body.city,
    adress: req.body.adress,
    image: req.file,
  };
  console.log(req.file);
  // Save  in the database
  Place.create(place)
    .then(data => {
      response.succes(req, res, data, 201);;
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err);
    });
};

module.exports = {
  create
}
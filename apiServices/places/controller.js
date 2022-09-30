const db = require('../../db');
const Place = db.Place;
const response = require('../../utils/response');
const fs = require('fs');

const createPlace = (req, res) => {
  //Validate request
  if (!req.body.type || !req.body.description || !req.body.price  || !req.body.status_place || !req.body.state || !req.body.city || !req.body.adress || !req.file.originalname) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
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
    image: req.file.originalname,
  };
  console.log(req.file);
  // Save  in the database
  Place.create(place)
    .then(data => {
      response.succes(req, res, data, 201);
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err);
    });
}
const updatePlace = (req,res)=>{
  const id = req.params.id;
  Place.update(req.body,{
    where: {places_id: id}
  })
  .then(num =>{
    if(num == 1){
      response.succes(req, res, `Place ${req.params.id} updated`, 201);
    }
  })
  .catch(err =>{
    response.error(req, res, 'Internal error', 500, err);
  })
}
const deletePlace = (req,res)=>{
  const id = req.params.id;
  Place.destroy({
    where: {places_id: id}
  })
  .then(num =>{
    if(num == 1){
      response.succes(req, res, `Place ${req.params.id} eliminated`, 201);
    }
  })
  .catch(err =>{
    response.error(req, res, 'Internal error', 500, err);
  });
  
}

module.exports = {
  createPlace,
  updatePlace,
  deletePlace
}
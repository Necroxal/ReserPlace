const db = require('../../db'); //Call ReserPlace Database
const Place = db.Place; //Table naming
const response = require('../../utils/response'); //Responses for binder utils

//methods for the places table
const createPlace = (req, res) => {
  //Validates if all client-side information exists to create
  if (!req.body.type || !req.body.description || !req.body.price || !req.body.status_place || !req.body.state || !req.body.city || !req.body.adress || !req.file) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a object for inject it into the database
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
  //Test data to verify image information
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
const updatePlace = (req, res) => {
  const id = req.params.id; //capture the id
  //Create object with the information sent from the client to be able to update some data
  const updates = {
    type: req.body.type,
    description: req.body.description,
    price: req.body.price,
    status_place: req.body.status_place,
    state: req.body.state,
    city: req.body.city,
    adress: req.body.adress
  }
  //Check if there is an image data type
  if(req.file){
    const image = req.file.originalname; //Add the original name of the image
    updates.image = image; //Add object updates
  }
  Place.update(updates,{ //Call methos update for to update some data
    where: {
      places_id: id //Condition to verify that it is equal to the id ofthe table in mysq
    }
  }).then(data =>{
    if(data == 1){ 
    response.succes(req, res, `Place ${req.params.id} updated`, 201); 
    }
    else{
      return res.send('The value you are trying to update is the same').status(400);
    }
  })
  .catch(err=>{
    response.error(req, res, 'Internal error', 500, err);
  })
}
const deletePlace = (req, res) => {
  const id = req.params.id;
  Place.destroy({ //call method for eliminated
      where: {
        places_id: id
      }
    })
    .then(num => {
      if (num == 1) {
        response.succes(req, res, `Place ${req.params.id} eliminated`, 201);
      }
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err);
    });

}
const findOnePlace = (req, res) => {
  const id = req.params.id;
  Place.findByPk(id)
    .then(data => {
      if (data) {
        response.succes(req, res, data, 201);
      }
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err);
    });
}
const findAllPlaces = (req, res) => {

  Place.findAll()
    .then(data => {
      response.succes(req, res, data, 201);
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err);
    });
}


module.exports = {
  createPlace,
  updatePlace,
  deletePlace,
  findOnePlace,
  findAllPlaces
}
const db = require('../../db'); //Call ReserPlace Database
const Reservation = db.Reservation; //Table naming
const response = require('../../utils/response'); //Responses for binder utils

const creaReserv = (req, res) => {
    //Validates if all client-side information exists to create
    if (!req.body.start_date || !req.body.end_date || !req.body.user_id || !req.body.places_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a object for inject it into the database
    const reservation = {
     start_date: req.body.start_date,
     end_date: req.body.end_date,
     user_id: req.body.user_id,
     places_id: req.body.places_id,
    };
    // Save  in the database
    Reservation.create(reservation)
      .then(data => {
        response.success(req, res, data, 201);

        const reserv = db.Reservation.findOne({where: {places_id : req.body.places_id}})

        console.log("Reserv",reserv);

        if(data){
          db.Place.update({status_place: "Reservado"}, {
            where: {
              places_id : req.body.places_id
            }
          })
        }
      })
      .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
      });
    }


const delReserv = (req, res) => {
  id = req.params.id

  Reservation.destroy({ //call method for eliminated
    where: {
      reservation_id: id
    }
  }).then(data => {
    response.success(req, res, `Reservation deleted with id: ${id}`, 201)
    if(data){
      db.Place.update({status_place: "Disponible"}, {
        where: {
          places_id : reserv.places_id
        }
      })
    }
  })
  .catch(err => {
    response.error(req, res, 'Internal error', 500, err);
  })
}


  module.exports={
    creaReserv,
    delReserv
  }
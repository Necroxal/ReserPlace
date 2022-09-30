const express = require('express');
const controller = require('./controller');
const router = express.Router();
const {uploadImage} = require('../../middleware/multer');


//routes
//Create place
router.post('/create',uploadImage(), controller.createPlace);
//Update place
router.put('/update/:id',controller.updatePlace);
//Delete place
router.delete('/delete/:id',controller.deletePlace);
//Find one place
router.get('/findo/:id', controller.findOnePlace);
//Find all places
router.get('/findall', controller.findAllPlaces);



module.exports = router;

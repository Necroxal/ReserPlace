const express = require('express');
const controller = require('./controller');
const router = express.Router();
const {uploadImage} = require('../../middleware/multer');


//routes
//Create Place
router.post('/create',uploadImage(), controller.createPlace);
//Update Place
router.put('/update/:id', controller.updatePlace);
//Delete Place
router.delete('/delete/:id',controller.deletePlace);


module.exports = router;

const express = require('express');
const controller = require('./controller');
const router = express.Router();
const {uploadImage} = require('../../middleware/multer');


//routes
router.post('/create',uploadImage(), controller.create);
module.exports = router;

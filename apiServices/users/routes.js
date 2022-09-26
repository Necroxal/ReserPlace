const express = require('express');
const controller = require('./controller');
const router = express.Router();

//Agregar alumno
router.post('/', controller.create);

module.exports = router;

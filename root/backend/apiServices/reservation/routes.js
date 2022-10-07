const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.post('/create', controller.creaReserv);
router.delete('/delete/:id', controller.delReserv)

module.exports = router;
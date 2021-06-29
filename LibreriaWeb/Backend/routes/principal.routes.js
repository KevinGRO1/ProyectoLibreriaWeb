const express = require('express');
const router = express.Router();
const principal = require('../controllers/principal.controller');

router.get('/', principal.getPrincipal);


module.exports = router; //enrutador
const express = require('express');
const router = express.Router();
const vistaPrincipal = require('../controllers/vistaPrincipal.controller');

router.get('/Admin', vistaPrincipal.getVistaPrincipal);
router.get('/Registro', vistaPrincipal.getMiCuenta);

module.exports = router; //enrutador
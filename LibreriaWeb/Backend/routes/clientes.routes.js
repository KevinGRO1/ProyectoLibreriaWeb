const express = require('express');
const router = express.Router();
const cliente = require('../controllers/cliente.controller');

router.get('/clientes', cliente.getClientes);
router.post('/clientes/insert/', cliente.createCliente);
router.get('/clientes/:id', cliente.getCliente);
router.get('/clientes/editar/:id', cliente.editarCliente);
router.post('/clientes/edit/:id', cliente.editCliente);
router.get('/clientes/delete/:id', cliente.deleteCliente);

module.exports = router; //enrutador
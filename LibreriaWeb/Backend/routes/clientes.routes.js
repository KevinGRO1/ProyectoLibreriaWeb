const express = require('express');
const router = express.Router();
const cliente = require('../controllers/cliente.controller');

router.get('/clientes', cliente.getClientes);
router.post('/clientes/insert/', cliente.createCliente);
router.post('/clientes/login/', cliente.loginCliente);
router.get('/Logout', cliente.logoutCliente);
router.get('/clientes/:id', cliente.getCliente);
router.get('/clientes/editar/:id', cliente.editarCliente);
router.post('/clientes/edit/:id', cliente.editCliente);
router.get('/clientes/delete/:id', cliente.deleteCliente);
//API
router.get('/listaClientes', cliente.getListaClientes);

module.exports = router; //enrutador
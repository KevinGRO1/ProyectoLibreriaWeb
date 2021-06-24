const express = require('express');
const router = express.Router();
const cliente = require('../controllers/cliente.controller');

router.get('/', cliente.getClientes);
router.post('/insert/', cliente.createCliente);
router.get('/:id', cliente.getCliente);
router.get('/editar/:id', cliente.editarCliente);
router.post('/edit/:id', cliente.editCliente);
router.get('/delete/:id', cliente.deleteCliente);

module.exports = router; //enrutador
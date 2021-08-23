const express = require('express');
const router = express.Router();
const catalogo = require('../controllers/catalogo.controller');

router.get('/catalogo', catalogo.getLibros);
//router.get('/libros/:id', catalogo.getLibro);
router.get('/compra/:id', catalogo.getCompra);
router.post('/compra/insert/', catalogo.createCompra);


module.exports = router;
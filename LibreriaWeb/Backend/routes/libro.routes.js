const express = require('express');
const router = express.Router();
const libro = require('../controllers/libro.controller');

router.get('/libros', libro.getLibros);
router.post('/libros/insert/', libro.createLibros);
router.get('/libros/:id', libro.getLibro);
router.get('/libros/editar/:id', libro.edicionLibro);
router.post('/libros/edit/:id', libro.editLibro);
router.get('/libros/delete/:id', libro.deleteLibros);

module.exports = router;
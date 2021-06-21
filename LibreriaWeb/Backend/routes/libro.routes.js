const express = require('express');
const router = express.Router();
const libro = require('../controllers/libro.controller');

router.get('/', libro.getLibros);
router.post('/', libro.createLibros);
router.get('/:id', libro.getLibro);
router.put('/:id', libro.editLibro);
router.delete('/:id', libro.deleteLibros);

module.exports = router;
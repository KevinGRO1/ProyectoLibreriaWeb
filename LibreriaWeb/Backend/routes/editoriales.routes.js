const express = require('express');
const router = express.Router();
const editorial = require('../controllers/editorial.controller');

router.get('/editorial', editorial.getEditoriales);
router.post('/editorial/insert/', editorial.createEditorial);
router.get('/editorial/:id', editorial.getEditorial);
router.get('/editorial/editar/:id', editorial.edicionEditorial);
router.post('/editorial/edit/:id', editorial.editEditorial);
router.get('/editorial/delete/:id', editorial.deleteEditorial);

module.exports = router;
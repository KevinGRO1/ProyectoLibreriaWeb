const express = require('express');
const router = express.Router();
const empleado = require('../controllers/empleado.controller');

router.get('/', empleado.getEmpleados );
router.post('/', empleado.createEmpleados);
router.get('/:id', empleado.getEmpleado);
router.put('/:id', empleado.editEmpleado);
router.delete('/:id', empleado.deleteEmpleados);

module.exports = router;
const express = require('express');
const router = express.Router();
const empleado = require('../controllers/empleado.controller');

router.get('/empleados', empleado.getEmpleados );
router.post('/empleados/insert/', empleado.createEmpleados);
router.get('/empleados/:id', empleado.getEmpleado);
router.get('/empleados/editar/:id', empleado.edicionEmpleado);
router.post('/empleados/edit/:id', empleado.editEmpleado);
router.get('/empleados/delete/:id', empleado.deleteEmpleados);

module.exports = router;
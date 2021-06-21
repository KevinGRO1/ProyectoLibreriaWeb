const Empleados = require('../models/empleados');

const empleadoController = {};

//Función para listar todos los empleados
empleadoController.getEmpleados = async(req, res)=>{
    const empleados = await Empleados.find();
    res.json(empleados);
        
};

//Función para registra un nuevo empleado
empleadoController.createEmpleados = async(req, res) =>{
    const empleado = new Empleados(req.body);
    await empleado.save();
    res.json({
        'status': 'Empleado Guardado'
    });
};

//Función para listar un empleado por el ID
empleadoController.getEmpleado = async(req, res) =>{
    const empleado = await Empleados.findById(req.params.id);
    res.json(empleado);
    
};

//Función para editar un empleado por el ID
empleadoController.editEmpleado = async(req, res) =>{
    const { id } = req.params; //Soocitio el id de params

    const empleado = {
        dni: req.body.dni,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cargo: req.body.cargo,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    };

    await Empleados.findByIdAndUpdate(id, {$set:empleado}, {new: true});

    res.json({status: 'Empleado actualizado'});
};

//Funcionn para eliminar un empleado
empleadoController.deleteEmpleados= async (req, res) =>{
    await Empleados.findByIdAndRemove(req.params.id);
    res.json({status: 'Empleado eliminado'});

}

module.exports = empleadoController;
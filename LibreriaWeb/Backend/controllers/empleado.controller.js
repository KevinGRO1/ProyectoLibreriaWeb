const Empleados = require('../models/empleados');

const empleadoController = {};

//Función para listar todos los empleados
empleadoController.getEmpleados = async(req, res)=>{
    const empleados = await Empleados.find();
    res.render('VistaEmpleado/empleados',{
        empleados
    });
        
};

//Función para registra un nuevo empleado
empleadoController.createEmpleados = async(req, res) =>{
    const sesion = await Empleados.startSession();
    sesion.startTransaction();
    try{
        const empleado = new Empleados(req.body);
        await empleado.save();        
        await sesion.commitTransaction();
        sesion.endSession()
        console.log("Transaccion comiteada con exito")
    }catch(error){
        res.redirect('/VistaEmpleado/404');
        await sesion.abortTransaction();
        sesion.endSession();
        console.log("Transaccion abortada")        
        throw error;
    }
    res.redirect('/empleados');
};

empleadoController.edicionEmpleado = async (req, res) =>{
    const sesion = await Empleados.startSession();
    sesion.startTransaction();
    try{
        const { id }=req.params;
        const empleados= await Empleados.findById(id);
        res.render('VistaEmpleado/editarEmpleado',{
        empleados
    });
        await sesion.commitTransaction();
        sesion.endSession();
        console.log("Transaccion comiteada con exito")
    }catch(error){
        await sesion.abortTransaction();
        sesion.endSession();
        console.log("Transaccion abortada")
        throw error;
    }
    
};

//Función para editar un empleado por el ID
empleadoController.editEmpleado = async(req, res) =>{
    const sesion = await Empleados.startSession();
    sesion.startTransaction();
    try{
        const { id } = req.params; //Soocitio el id de params
        await Empleados.updateOne({_id: id}, req.body);
        res.redirect('/empleados');
        await sesion.commitTransaction();
        sesion.endSession();
        console.log("Edicion comiteada con exito")
    }catch(error){
        await sesion.abortTransaction();
        sesion.endSession();
        console.log("Transaccion abortada")
        res.redirect('/empleados');
        throw error;
    }
    

};

//Funcionn para eliminar un empleado
empleadoController.deleteEmpleados= async (req, res) =>{
    const sesion = await Empleados.startSession();
    sesion.startTransaction();
    try{
        const { id }=req.params;
        await Empleados.remove({_id:id});
        res.redirect('/empleados');
        await sesion.commitTransaction();
        sesion.endSession();
        console.log("Delete comiteada con exito")
    }catch(error){
        await sesion.abortTransaction();
        sesion.endSession();
        console.log("Transaccion abortada")
        res.redirect('/empleados');
        throw error;
    }
    

};

//Función para listar un empleado por el ID
empleadoController.getEmpleado = async(req, res) =>{
    const empleado = await Empleados.findById(req.params.id);
    res.json(empleado);
    
};


/*
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
*/
module.exports = empleadoController;
const Clientes = require('../models/clientes');
const Empleado = require('../models/empleados')

const clienteController = {};

clienteController.getListaClientes = async(req, res) =>{
    const clientes = await Clientes.find();
    return res.send(clientes);
};


clienteController.getClientes = async(req, res) =>{
    const clientes = await Clientes.find();
    res.render('VistaEmpleado/clientes',{
        clientes
    });
};

clienteController.createCliente = async (req, res) =>{
    const sesion = await Clientes.startSession();    
    //implementacion de una transaccion en Mongodb
    sesion.startTransaction();
    try{
        const cliente = new Clientes(req.body);
        await cliente.save();
        await sesion.commitTransaction();
        sesion.endSession();
        console.log("Transaccion comiteada con exito")
    }catch (error){
        await sesion.abortTransaction();
        sesion.endSession();
        console.log("Transaccion abortada")
        throw error;
    }    
    res.redirect('/clientes');
};

clienteController.editarCliente = async(req, res) =>{
    const sesion = await Clientes.startSession();
    sesion.startTransaction();
    try{
        const { id } = req.params;
        const clientes = await Clientes.findById(id);
        res.render('VistaEmpleado/editarClientes', {
            clientes
    });
        await sesion.commitTransaction();
        sesion.endSession();
        console.log("Transaccion comiteada con exito")
    }catch (error){
        await sesion.abortTransaction();
        sesion.endSession();
        console.log("Transaccion abortada")
        throw error;
    }    

    
};

clienteController.editCliente = async(req, res) =>{
    const sesion = await Clientes.startSession();
    sesion.startTransaction();
    try{
        const { id } = req.params;
        await Clientes.updateOne({_id: id}, req.body);
        res.redirect('/clientes');
        await sesion.commitTransaction();
        sesion.endSession();
        console.log("Transaccion comiteada con exito")
    }catch (error){
        await sesion.abortTransaction();
        sesion.endSession();
        console.log("Transaccion abortada")
        throw error;
    }  
    
};

clienteController.deleteCliente = async(req, res) =>{
    const sesion = await Clientes.startSession();
    sesion.startTransaction();
    try{
        const { id } = req.params;
        await Clientes.remove({_id: id});
        res.redirect('/clientes');
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

clienteController.getCliente = async(req, res) =>{
    const clientes = await Clientes.findById(req.params.id)
    res.json(cliente);
};

clienteController.loginCliente = async(req, res)=>{
    const datos_cliente = req.body;
    await Clientes.find({ email: datos_cliente.email.toLowerCase(), contraseña: datos_cliente.contraseña}, (err, cliente) => {
            if(err){
                console.log("ERROR");
                return res.status(500).send({message: 'Error'});
            }
            if(cliente.length == 0){
                Empleado.find({ email: datos_cliente.email.toLowerCase(), contraseña: datos_cliente.contraseña}, (err, empleado) => {
                    if(err){
                        console.log("ERROR");
                        return res.status(500).send({message: 'Error'});
                    }
                    if(empleado.length == 0){
                        
                        req.flash('error_msg_login', 'Email o contraseñas incorrectas');
                        return res.redirect('/Registro');
                    }else{
                        console.log(empleado);
                        req.flash('success_msg_login', 'Usuario logueado');
                        req.flash('usuario_logueado', empleado);
                        return res.redirect('/admin')
                    }
                }); 
                
            }else{
                console.log(cliente);
                req.flash('success_msg_login', 'Usuario logueado');
                req.flash('usuario_logueado', cliente);
                return res.redirect('/vistaPrincipal')
            }
        });    
        
};

clienteController.logoutCliente = async(req,res) =>{
    
    return await res.redirect('/vistaPrincipal')
}



/*
clienteController.getClientes = async(req, res) =>{
    const clientes = await Clientes.find();
    res.json(clientes);
};


clienteController.createCliente = async (req, res) =>{
    const cliente = new Clientes(req.body);
    await cliente.save();
    res.json({ status : "Cliente guardado" });
};

clienteController.getCliente = async(req, res) =>{
    const cliente = await Clientes.findById(req.params.id)
    res.json(cliente);
};

clienteController.deleteCliente = async(req, res) =>{
    await Clientes.findByIdAndRemove(req.params.id);req
    res.json({ status: 'Cliente eliminado'});
}

clienteController.editCliente = async(req, res) =>{
    const { id } = req.params;

    const cliente = {
        dni: req.body.dni,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    };
     await Clientes.findByIdAndUpdate(id, {$set: cliente}, {new: true});
    res.json({ status: 'Cliente actualizado'});
};

clienteController.getCliente = async(req, res) =>{
    const cliente = await Clientes.findById(req.params.id)
    res.json(cliente);
};


*/



   


module.exports = clienteController;

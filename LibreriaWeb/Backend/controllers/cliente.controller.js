const Clientes = require('../models/clientes');

const clienteController = {};

clienteController.getClientes = async(req, res) =>{
    const clientes = await Clientes.find();
    res.render('principal',{
        clientes
    });
};

clienteController.createCliente = async (req, res) =>{
    const cliente = new Clientes(req.body);
    await cliente.save();
    res.redirect('/api/clientes/');
};

clienteController.deleteCliente = async(req, res) =>{
    const { id } = req.params;
    await Clientes.remove({_id: id});
    res.redirect('/api/clientes/');
};

clienteController.editarCliente = async(req, res) =>{
    const { id } = req.params;
    const clientes = await Clientes.findById(id);
    res.render('edit', {
        clientes
    });
};

clienteController.editCliente = async(req, res) =>{
    const { id } = req.params;
    await Clientes.updateOne({_id: id}, req.body);
    res.redirect('/api/clientes/');
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

*/

clienteController.getCliente = async(req, res) =>{
    const cliente = await Clientes.findById(req.params.id)
    res.json(cliente);
};



   


module.exports = clienteController;

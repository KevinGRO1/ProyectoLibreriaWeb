const vistaPrincipalController = {};
const Clientes = require('../models/clientes');


vistaPrincipalController.getVistaPrincipal = async(req, res) =>{
    const usuario_logueado = req.flash('usuario_logueado');
    const libros = await Libros.find();
    console.log(libros);
    res.render('vistaPrincipal', {
        usuario_logueado, libros
    });
};

vistaPrincipalController.getPrincipal = async(req, res) =>{
    res.render('VistaEmpleado/principal');
};


module.exports = vistaPrincipalController;

vistaPrincipalController.getMiCuenta = async(req, res)=>{
    
    await res.render('VistaCliente/Registro');
};
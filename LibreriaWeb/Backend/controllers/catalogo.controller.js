const Libros = require('../models/libros');
const Compra = require('../models/compra');

const catalogoController = {};

//Funcion para listar todos los libros
catalogoController.getLibros = async(req, res) => {
    const libros = await Libros.find();
    res.render('VistaEmpleado/catalogo',{
        libros
    });    
};

//Función para listar un libro por el ID
catalogoController.getLibro = async(req, res) =>{
    const libro = await Libros.findById(req.params.id);
    res.json(libro);
};

catalogoController.getCompra = async(req, res) =>{
    const { id } = req.params;
    const libro = await Libros.findById(id);
    res.render('VistaEmpleado/compraLibro', {
        libro
    });
};

catalogoController.createCompra = async (req, res) =>{
    const compra = new Compra(req.body);
    await compra.save();
    res.redirect('/catalogo');
};


module.exports = catalogoController;
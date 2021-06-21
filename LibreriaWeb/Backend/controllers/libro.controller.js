const Libros = require('../models/libros');

const libroController = {};

//Funcion para listar todos los libros
libroController.getLibros = async(req, res) => {
    const libros = await Libros.find();
    res.json(libros);
};

//Función para registrar un nuevo libro
libroController.createLibros = async(req, res) => {
    const libro = new Libros(req.body)
    await libro.save();
    res.json({
        'status': 'Libro guardado'
    });
};

//Función para listar un libro por el ID
libroController.getLibro = async(req, res) =>{
    const libro = await Libros.findById(req.params.id);
    res.json(libro);
};

//Funcionn para editar un libro por el ID
libroController.editLibro = async(req, res) => {
    const { id } = req.params; //Solicito el id de params

    const libro = {
        editorial: req.body.editorial,
        titulo: req.body.titulo,
        autor: req.body.autor,
        pais: req.body.pais,
        precio: req.body.precio,
        descripción: req.body.descripción,
        isbn: req.body.isbn
    };

    await Libros.findByIdAndUpdate(id, {$set: libro}, {new: true});
    res.json({status: 'Libro actualizado'});
};

//Funcionn para eliminar un libro
libroController.deleteLibros = async(req, res)=>{
    await Libros.findByIdAndRemove(req.params.id);
    res.json({status: 'Libro eliminado'});
};

module.exports = libroController;
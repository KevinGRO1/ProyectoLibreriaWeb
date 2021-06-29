const Editoriales = require('../models/editorial');

const editorialController = {};

editorialController.getEditoriales = async(req, res) =>{
    const editoriales = await Editoriales.find();
    res.render('editorial',{
        editoriales
    });
};

editorialController.createEditorial = async(req, res) =>{
    const editorial = new Editoriales(req.body);
    await editorial.save();
    res.redirect('/editorial');
};

editorialController.edicionEditorial = async(req, res) =>{
    const { id } = req.params;
    const editoriales = await Editoriales.findById(id);
    res.render('editarEditorial',{
        editoriales
    });
};

editorialController.editEditorial =async(req, res) =>{
    const { id }= req.params;
    await Editoriales.updateOne({_id: id}, req.body);
    res.redirect('/editorial');
};

editorialController.deleteEditorial = async(req, res) =>{
    const { id }=req.params;
    await Editoriales.remove({_id: id});
    res.redirect('/editorial');
};

editorialController.getEditorial = async(req, res) =>{
    const editorial = await Editoriales.findById(req.params.id);
    res.json(editorial);
}




/*

editorialController.getEditoriales = async(req, res) =>{
    const editoriales = await Editoriales.find();
    res.json(editoriales);
}

editorialController.createEditorial = async(req, res) =>{
    const editorial = await new Editoriales(req.body);
    await editorial.save();
    res.json({ status: 'Editorial guardada' });
}

editorialController.getEditorial = async(req, res) =>{
    const editorial = await Editoriales.findById(req.params.id);
    res.json(editorial);
}

editorialController.editEditorial = async(req, res) =>{
    const { id } = req.params;

    const editorial = {
        nombre: req.body.nombre,
        direccion: req.body.direccion
    };

    await Editoriales.findByIdAndUpdate(id, {$set: editorial}, {new: true});
    res.json({status: 'Editorial modificada'});
};

editorialController.deleteEditorial = async(req, res) =>{
    await Editoriales.findOneAndRemove(req.params.id);
    res.json({status: 'Editorial eliminada'});
}
*/

module.exports = editorialController;
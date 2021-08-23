
const principalController = {};

principalController.getPrincipal = async(req, res) =>{
    res.render('VistaEmpleado/principal');
};



module.exports = principalController;
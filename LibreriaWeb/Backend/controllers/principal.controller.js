
const principalController = {};

principalController.getPrincipal = async(req, res) =>{
    res.render('principal');
};



module.exports = principalController;
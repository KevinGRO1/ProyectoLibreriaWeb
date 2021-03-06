const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const path = require('path');
const app = express();
const flash = require('connect-flash');
const { mongoose } = require('./database');


//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views')); //indica al servidor donde esta la carpeta vistas
//app.set('assets', path.join(__dirname, 'assets')); 
app.set('view engine', 'ejs');  

//Middlewares
app.use(morgan('dev')); //funcion que se ejecuta antes de llegar a las rutas. A partir de aqui se pueden procesaar los datos antes de llegara la ruta
app.use(express.urlencoded({extended:false}));
app.use(express.json());//Permite entender los codigos del navegador en formato json
//app.use(express.static(__dirname + '/assets'));
app.use(session({
  secret: 'mysecretSession',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Variables Globales
app.use((req, res, next) =>{
  app.locals.error_msg_login = req.flash('error_msg_login');
  app.locals.success_msg_login = req.flash('success_msg_login');
  app.locals.usuario_logueado = req.flash('usuario_logueado');
  next();
});

//Importamos las Rutas
app.use( require('./routes/principal.routes'));
app.use( require('./routes/clientes.routes'));
app.use( require('./routes/editoriales.routes'));
app.use( require('./routes/empleados.routes'));
app.use( require('./routes/libro.routes'));
app.use( require('./routes/catalogo.routes'));
app.use( require('./routes/comunes.routes'));



// static files
app.use(express.static(path.join(__dirname, "public")));

app.use(async(req, res) => {
  res.render("vistaPrincipal");
});


app.use((req, res) => {
    res.render("404");
  });



//Creando el Servidor
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});
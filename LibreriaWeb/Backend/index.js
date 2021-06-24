const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const { mongoose } = require('./database');
//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views')); //indica al servidor donde esta la carpeta vistas
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev')); //funcion que se ejecuta antes de llegar a las rutas. A partir de aqui se pueden procesaar los datos antes de llegara la ruta
app.use(express.urlencoded({extended:false}));
app.use(express.json());//Permite entender los codigos del navegador en formato json

//Importamos las Rutas
app.use('/api/empleados', require('./routes/empleados.routes'));
app.use('/api/libros', require('./routes/libro.routes'));
app.use('/api/clientes', require('./routes/clientes.routes'));
app.use('/api/editoriales', require('./routes/editoriales.routes'));

//Creando el Servidor
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});
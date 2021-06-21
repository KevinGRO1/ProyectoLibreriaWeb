const express = require('express');
const morgan = require('morgan');

const app = express();

const { mongoose } = require('./database');
//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
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
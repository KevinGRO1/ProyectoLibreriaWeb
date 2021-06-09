const express = require('express');
const morgan = require('morgan');

const app = express();

const { mongoose } = require('./database');
//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());//Permite entender los codigos del navegador en formato json

//Routes
app.use('/api/empleados', require('./routes/empleados.routes'));

//Creando el Servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
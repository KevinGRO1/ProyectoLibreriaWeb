const mongoose  = require("mongoose");
const { Schema } = mongoose;

const clienteSchema = new Schema({

    DNI: {
        type: String,
        required: [true, 'El DNI es necesario']
    },
    nombre: { 
        type: String,
        required: [true, 'El nombre es necesario']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es necesario']
    },
    email: {
        type: String,
        required: [true, 'El email es necesario']
    },
    contraseña: {
        type: String,
        required: [true, 'La contraseña es necesaria']

    },
    direccion: {
        type: String        
    },
    telefono: {
        type: String,
        required: [true, 'El numero de telefono es necesario']
    }
});

module.exports = mongoose.model('Clientes', clienteSchema);
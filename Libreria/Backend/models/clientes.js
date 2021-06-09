const mongoose  = require("mongoose");
const { Schema} = mongoose;

let clienteSchema = new Schema({
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
    cargo: {
        type: String,
        required: [true, 'El cargo es necesario']
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es necesaria']
    },
    telefono: {
        type: String,
        required: [true, 'El numero de telefono es necesario']
    }
});

module.exports = mongoose.model('Clientes'. clienteSchema);
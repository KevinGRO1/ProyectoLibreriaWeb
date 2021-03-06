const mongoose = require('mongoose');
const {Schema} = mongoose;

const libroSchema = new Schema ({
    editorial: {
        type: String,
        required: [true, 'La editorial es necesaria']
    },
    titulo: {
        type: String,
        required: [true, 'El titulo es necesario']

    },
    autor:{
        type: String,
        required: [true, 'El autor es necesario']
    },
    pais:{
        type: String,
        required: [true, 'El pais es necesario']
    },
    precio:{
        type: String,
        required: [true, 'El precio es necesario']
    },
    descripción:{
        type: String,
        required: [true, 'La descripcion es necesario']
    },
    isbn:{
        type: String,
        required: [ true, 'El ISBN es necesario']
    },
    cantidad:{
        type: String,
        required: [true, 'La cantidad es necesaria']
    }
});

module.exports = mongoose.model('Libros', libroSchema);
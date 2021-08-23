const mongoose = require('mongoose');
const {Schema} = mongoose;

const catalogoSchema = new Schema ({
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
});

module.exports = mongoose.model('Catalogo', catalogoSchema);
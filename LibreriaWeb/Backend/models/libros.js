const mongoose = require('mongoose');
const {Schema} = mongoose;

let libroSchema = new Schema ({
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
        required: [true]
    },
    precio:{
        type: String,
        required: [true]
    },
    descripción:{
        type: String,
        required: [true, 'La descripcion es necesario']
    },
    isbn:{
        type: String,
        required: [ true]
    }
});

module.exports = mongoose.model('Libro', libroSchema);
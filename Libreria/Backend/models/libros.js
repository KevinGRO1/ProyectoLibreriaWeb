const mongoose = require('mongoose');
const {Schema} = mongoose;

let libroSchema = new Schema ({
    titulo: {
        type: String,
        required: [true, 'El titulo es necesario']

    },
    autor:{
        type: String,
        required: [true, 'El autor es necesario']
    },
    descripción:{
        type: String,
        required: [true, 'La descripcion es necesario']
    }
});

module.exports = mongoose.model('Libro', libroSchema)
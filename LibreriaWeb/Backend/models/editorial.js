const mongoose = require('mongoose');
const {Schema} = mongoose;

const editorialSchema = new Schema({

    nombre: {
        type: String,
        required: [true , 'El nombre es necesario']
    },

    direccion: {
        type: String,
        required: [true, 'La dirección es necesaria']
    }

});

module.exports = mongoose.model('Editoriales', editorialSchema);
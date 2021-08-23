const mongoose = require('mongoose');
const {Schema} = mongoose;

const compraSchema = new Schema ({
    
    titulo: {
        type: String,
        required: [true, 'El titulo es necesario']
    },
    autor:{
        type: String,
        required: [true, 'El autor es necesario']
    },
    editorial: {
        type: String,
        required: [true, 'La editorial es necesaria']
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
    departamentoCompra:{
        type: String,
        required: [true, 'El departamento es necesario']
    },
    provinciaCompra:{
        type: String,
        required: [true, 'La provincia es necesario']
    },
    distritoCompra:{
        type: String,
        required: [true, 'El distrito es necesario']
    },
    direccionCompra:{
        type: String,
        required: [true, 'La dirección es necesaria']
    },
    telefonoCompra:{
        type: String,
        required: [true, 'El teléfono es necesario']
    },
    precioEntrega:{
        type: String,
        required: [true, 'El precio es necesario']
    },
    igv:{
        type: String,
        required: [true, 'El IGV es necesario']
    },
    total:{
        type: String,
        required: [true, 'El total es necesario']
    }
    
});

module.exports = mongoose.model('Compra', compraSchema);
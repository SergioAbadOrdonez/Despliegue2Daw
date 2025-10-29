const mongoose = require('mongoose');

let LibroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    editorial: {
        type: String,
        required: false,
        trim: true
    },
    precio: {
        type: Number,
        min: 0
    },
    autor: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'autores'
        }]
});

let Libro = mongoose.model('libros', LibroSchema);
module.exports = Libro;
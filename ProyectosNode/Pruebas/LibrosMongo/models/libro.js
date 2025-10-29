const mongoose = require('mongoose');

let libroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    editorial: {
        type: String,
        required: false,
        trim: true,
    },
    precio: {
        type: Number,
        min: 0
    }
});

let Libro = mongoose.model('libros', libroSchema);
module.exports = Libro;
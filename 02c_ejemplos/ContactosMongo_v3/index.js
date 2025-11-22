/*
Pruebas con la librería Mongoose para acceder a una base de datos MongoDB
Versión modificada de la anterior para definir los restaurantes y mascotas como 
subdocumentos dentro de la colección de contactos
*/

const mongoose = require('mongoose');
const Contacto = require(__dirname + "/models/contacto");

// Conexión con la BD
mongoose.connect('mongodb://127.0.0.1:27017/contactos_subdocumentos');

// Inserción de contacto con toda su información
let contacto1 = new Contacto({
    nombre: 'Nacho',
    telefono: 966112233,
    edad: 39,
    restauranteFavorito: { 
        nombre: 'La Tagliatella', 
        direccion: 'C.C. San Vicente s/n', 
        telefono: 961234567}
});
contacto1.mascotas.push({nombre:'Otto', tipo:'perro'});
contacto1.mascotas.push({nombre:'Piolín', tipo:'otros'});
contacto1.save().then(resultado => {
    console.log("Contacto guardado: ", resultado);
}).catch(error => {
    console.log("ERROR:", error);
});

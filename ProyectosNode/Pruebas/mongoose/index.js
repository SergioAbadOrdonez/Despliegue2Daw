const mongoose = require('mongoose');
const Contacto = require(__dirname + "/models/contacto");

mongoose.connect('mongodb://127.0.0.1:27017/contactos');

let contacto1 = new Contacto({
    nombre: "Nacho",
    telefono: "966112233", 
    edad: 45
});
contacto1.save().then(resultado => {
    console.log("Contacto añadido:", resultado);
}).catch(error => {
    console.log("ERROR añadiendo contacto:", error);
});
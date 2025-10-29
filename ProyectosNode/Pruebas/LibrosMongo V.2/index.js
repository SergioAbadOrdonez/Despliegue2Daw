const mongoose = require('mongoose');
const Libro = require(__dirname + "/models/libro");

mongoose.connect('mongodb://127.0.0.1:27017/libros');

// let libro1 = new Libro({
//     titulo: "El capitán Alatriste",
//     editorial: "Afaguara", 
//     precio: 15
// });
// libro1.save().then(resultado => {
//     console.log("Libro añadido:", resultado);
// }).catch(error => {
//     console.log("ERROR añadiendo libro:", error);
// });

// let libro2 = new Libro({
//     titulo: "El juego de Ender",
//     editorial: "Ediciones B", 
//     precio: 8.95
// });
// libro2.save().then(resultado => {
//     console.log("Libro añadido:", resultado);
// }).catch(error => {
//     console.log("ERROR añadiendo libro:", error);
// });

Libro.findByIdAndUpdate('68f0c68b1052a9fc011c46fc', 
    {$set: {titulo:'HOLAOALLA'}, $inc: {__v: 1}}, {new:true})
.then(resultado => {
    console.log("Modificado contacto:", resultado);
}).catch (error => {
    console.log("ERROR:", error);
});

Libro.findByIdAndDelete("68f0c68b1052a9fc011c46fc").then(resultado => {
    console.log("libro eliminado: ", resultado);
}).catch (error => {
    console.log("ERROR:", error);
});


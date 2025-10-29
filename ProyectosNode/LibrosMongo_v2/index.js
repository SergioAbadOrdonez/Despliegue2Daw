const mongoose = require('mongoose');
const Libro = require('./models/libro');
const Autor = require('./models/autor');
mongoose.connect('mongodb://127.0.0.1:27017/libros');

// let libro1 = new Libro({
//     titulo: "El capitán Alatriste",
//     editorial: "Alfaguara", 
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



// Libro.find({precio: {$gte: 10, $lte: 20}}).then(libros => {
//     console.log("Libros encontrados:", libros);
// }).catch(error => {
//     console.log("ERROR buscando libros:", error);
// });

// Libro.findById("68f0c6f1e14706d00c7e9fb2").then(libro => {
//     console.log("Libro encontrado:", libro);
// }).catch(error => {
//     console.log("ERROR buscando libro por ID:", error);
// });

// Libro.findByIdAndDelete("68f620266b5a668e7b095837").then(resultado => {
//     console.log("Libro eliminado:", resultado);
// }).catch(error => {
//     console.log("ERROR eliminando libro:", error);
// });

// Libro.findByIdAndUpdate("68f0c6f1e14706d00c7e9fb3", 0,
//     { $set: { precio: 50 }, $inc: { __v: 1 } }, { new: true }).then(resultado => {
//     console.log("Libro actualizado:", resultado);
// }).catch(error => {
//     console.log("ERROR actualizando libro:", error);
// });

let autor1 = new Autor({
    nombre: "Juan Carlos Onetti",
    anyoNacimiento: 1909
});
let autor2 = new Autor({
    nombre: "Juan Carlos Onetti",
    anyoNacimiento: 1909
});


async function guardarAutorConRelaciones() {
    try {
        let autorGuardado1 = await autor1.save();
        console.log("Autor guardado correctamente:", autorGuardado1);
        let autorGuardado2 = await autor2.save();
        console.log("Autor guardado correctamente:", autorGuardado2);

        let libro1 = new Libro({
            titulo: "El capitán Alatriste",
            editorial: "Alfaguara",
            precio: 15,
            autor: [autorGuardado1._id]
        });
        let libro2 = new Libro({
            titulo: "El quijote de la Mancha",
            editorial: "Optimus",
            precio: 20,
            autor: [autorGuardado2._id]
        });


        let LibroGuardado = await libro1.save();
        console.log("Libro guardado correctamente:", LibroGuardado);
        let LibroGuardado2 = await libro2.save();
        console.log("Libro guardado correctamente:", LibroGuardado2);

    } catch (error) {
        console.error("Error al guardar los datos relacionados:", error);
    }
}

guardarAutorConRelaciones();
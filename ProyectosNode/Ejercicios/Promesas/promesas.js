let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 41},
    {nombre: "Ana", telefono: "911223344", edad: 36},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
];

//*Promesas

let nuevaPersona = persona => {
    return new Promise((resolve,reject) =>{
        let resultado = datos.filter(pers => pers.telefono === persona.telefono)
        if(resultado.length === 0){
            datos.push(persona);
            resolve(persona);
        }else
            reject("Ya hay una persona con ese teléfono.")
    })
}

let borrarPersona = telefono => {
    return new Promise((resolve,reject) =>{
        let resultado = datos.filter(pers => pers.telefono != telefono);
        if(resultado.length > 0){
            datos = datos.filter(persona => persona.telefono != telefono);
            resolve(resultado[0]);
        }
        else
            reject("Error: no se ha encontrado coincidencias.");
    })
}

nuevaPersona({nombre: "Juan", telefono:"965661564", edad: 60}).then(resultado => {
    console.log("Persona añadida.");
    console.log(resultado);
});
borrarPersona("910011001").then(resultado => {
    console.log("Persona borrada.");
    console.log(resultado);
});
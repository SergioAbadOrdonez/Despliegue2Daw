let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 41},
    {nombre: "Ana", telefono: "911223344", edad: 36},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
];

nuevaPersona({nombre: "Juan", telefono:"965661564", edad: 60});
nuevaPersona({nombre: "Rodolfo", telefono:"910011001", edad: 20});
borrarPersona("910011001");
console.log(datos);

let nuevaPersona = persona => {
    let existe = datos.filter(pers => pers.telefono === persona.telefono);
    if (existe.length == 0){
        datos.push(persona);
    }
}

let borrarPersona = persona => {
    datos = datos.filter(pers => pers.telefono != persona.telefono);
}
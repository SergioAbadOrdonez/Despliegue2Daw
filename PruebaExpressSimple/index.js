/*
Prueba simple de uso de Express para conectar a 
una ruta raíz que emite un mensaje de bienvenida
*/

const os = require('os');
const express = require('express');

let app = express();

app.get('/fecha', (req, res) => {
    res.send(new Date().toLocaleDateString());
});
app.get('/usuario', (req, res) => {
    res.send(os.userInfo().username);
});
app.get('/', (req, res) => {
    res.send('Bienvenido a la API');
});
app.listen(8080);
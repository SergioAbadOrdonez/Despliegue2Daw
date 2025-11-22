const express = require('express');
const mongoose = require('mongoose');




mongoose.conect('mongodb://127.0.0.1:27017/basketleaguemanager');

let app = express();

app.use(express.json());
app.use
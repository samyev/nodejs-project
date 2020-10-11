const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const requireDir = require("require-dir");

// Inciciando o App
const app = express();
app.use(express.json());
app.use(cors());

//inicando o DB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mongodbwithnodejs.wpqij.mongodb.net/nodeapi?retryWrites=true&w=majority`

mongoose.connect(
    uri, 
    { useUnifiedTopology: true ,
      useNewUrlParser: true }
);
requireDir('./src/models');

var PORTA = process.env.PORT || 8080


// Rotas
app.use('/api', require('./src/routes'));


app.listen(3001);
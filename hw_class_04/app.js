const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false }));
app.use(router); //za da imame pristap do nasite ruti


module.exports = app;
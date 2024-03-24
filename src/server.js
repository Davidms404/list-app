const express = require('express');
const path = require('path');
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//static files  
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
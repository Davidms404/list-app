const express = require('express');
const cors = require('cors');
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);

//middlewares
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   next();
// });

app.use(cors({ origin: 'http://localhost:5173' })); //para permitir las requests desde ese puerto
app.use(express.urlencoded({extended: false}));
app.use(express.json());

module.exports = app;
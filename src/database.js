const mongoose = require('mongoose');
const MONGODB_URI =process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(db => console.log('Database is connected to', db.connection.name))
  .catch(error => console.log('Ha ocurrido un error: ', error));
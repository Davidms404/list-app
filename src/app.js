require('dotenv').config();
const app = require('./server.js');
require('./database.js');

//routers
const router = require('./routes/routes.js');
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de list-app, David');
});

app.listen(app.get('port'), () => {
  console.log('Online server on port', app.get('port'));
});
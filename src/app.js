require('dotenv').config();
const app = require('./server.js');
require('./database.js');

//routers
const tasksRouter = require('./routes/tasks.routes.js');
app.use('/api', tasksRouter);
const userRouter = require('./routes/user.routes.js');
app.use('/api', userRouter);

app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de list-app, David');
});

app.listen(app.get('port'), () => {
  console.log('Online server on port', app.get('port'));
});
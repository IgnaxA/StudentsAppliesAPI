const express = require('express');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/project-routes')
const settings = require('./settings.json')

const PORT = 80;
const URL = settings.connectUrl;
const app = express();
app.use(express.json());
app.use(projectRoutes)

mongoose
  .connect(URL)
  .then(() => console.log('Connecting to MongoDb'))
  .catch((err) => console.log(`Failed connect to database: ${err}`));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
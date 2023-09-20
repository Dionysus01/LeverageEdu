// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./db'); // Your database connection file
const routes = require('./routes'); // Create this file for defining routes

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes); // Define your routes in the routes file

const port = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

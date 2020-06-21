'use strict';

const express = require('express');
const v1 = require('../lib/api/v1');
const timeStamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error404 = require('./middleware/404');
const error500 = require('./middleware/500');
const app = express();

app.use(express.json());
app.use(timeStamp);
app.use(logger);

app.get('/', (req, res) => {
  res.send('Welcome to my API, use these routes please: <br> api/v1/categories <br> api/v1/products');
});

app.use('/api/v1', v1);

app.use(error404);
app.use(error500);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is up on PORT: ' + port);
    });
  }
}

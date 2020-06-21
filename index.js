'use strict';

require('dotenv').config();
const server = require('./lib/server');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_ATLAS_URI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on('open', () => {
  console.log('connect to mongo');
});

server.start(PORT);

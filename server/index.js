const express = require('express');
const routes = require('../routes');
const router = require('../routes/product')
const server = express();
server.use(express.json());

server.use('/api/v1', routes);
server.use('/api/v1', router)

module.exports = server;
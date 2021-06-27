const express = require('express');
const route = require('./route');
const path = require('path');

const server = express();

server.set('view engine', 'ejs');

server.use(express.static('public'));

server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({ extended: true }));

server.use(route);

var porta = process.env.PORT || 8080;
server.listen(porta);
// server.listen(6000, () => console.log('RODANDO'));

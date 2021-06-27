const express = require('express');
const route = require('./route');
const path = require('path');

const PORT = process.env.PORT || 3000;
const server = express();

server.set('view engine', 'ejs');

server.use(express.static('public'));

server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({ extende: true }));

server.use(route);

server.listen(PORT, () => console.log('RODANDO'));

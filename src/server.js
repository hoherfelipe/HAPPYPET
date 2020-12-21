// importar dependencias

const express = require('express');
const path = require('path');
const pages = require('./pages.js');


//iniciando bibliotecas
const server = express()
server

// utilizando os arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//criar uma rota
.get('/', pages.index)
.get('/ong', pages.ong)
.get('/ongs', pages.ongs)
.get('/createOng', pages.createOng)

//ligar servidor
server.listen(5500)
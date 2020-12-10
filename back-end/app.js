var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.bfcxt.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)

var app = express();

// Habilita a chamada do back-end a partir de um servidor distinto
// É necessário instalar:
// npm install cors --save
const cors = require('cors')
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const teste = require('./routes/teste')
app.use('/teste', teste)

const evento = require('./routes/evento')
app.use('/evento', evento)

const indice = require('./routes/indice')
app.use('/indice', indice)

const subsetor = require('./routes/subsetor')
app.use('/subsetor', subsetor)

const setor = require('./routes/setor')
app.use('/setor', setor)

const usuario = require('./routes/usuario')
app.use('/usuario', usuario)

const historico = require('./routes/historico')
app.use('/historico', historico)

module.exports = app;

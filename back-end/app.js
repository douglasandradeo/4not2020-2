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
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.neeww.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const teste = require('./routes/teste')
app.use('/teste', teste)

const curso = require('./routes/evento')
app.use('/evento', curso)

const professor = require('./routes/indice')
app.use('/indice', professor)

const sala_aula = require('./routes/resultado')
app.use('/resultado', sala_aula)

const turma = require('./routes/setor')
app.use('/setor', turma)

const turma = require('./routes/tipo')
app.use('/tipo', turma)

const turma = require('./routes/usuario')
app.use('/usuario', turma)

module.exports = app;

const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/');
 });
 var createError = require('http-errors');lc
 var express = require('express');
 var path = require('path');
 var cookieParser = require('cookie-parser');
 var logger = require('morgan');
 var cors = require('cors');
 
 //var salasRouter = require('./routes/salas');
 var clientesRouter = require('./routes/clientesRoute');
 //var funcionariosRouter = require('./routes/funcionarios');
 //var reservasRouter = require('./routes/reservas');
 
 var app = express();
 
 // CORS
 app.use(cors({origin:'http://localhost:5000'}));
 app.options('*', cors());
 
 // view engine setup
 //app.set('views', path.join(__dirname, 'views'));
 //app.set('view engine', 'ejs');
 
 app.use(logger('dev'));
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 app.use(cookieParser());
 app.use(express.static(path.join(__dirname, 'public')));
 
 //app.use('/salas', salasRouter);
 app.use('/clientes', clientesRouter);
 //app.use('/funcionarios', funcionariosRouter);
 //app.use('/reservas', reservasRouter);
 
 // catch 404 and forward to error handler
 app.use(function(req, res, next) {
   next(createError(404));
 });
 
 // error handler
 app.use(function(err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};
 
   // render the error page
   res.status(err.status || 500);
   res.render('error');
 });
 
 module.exports = app;
 
 
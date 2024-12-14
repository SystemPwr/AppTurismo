//const http = require('http');
//const server = http.createServer((req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Hello, World!\n');
//});

//server.listen(3000, () => {
//  console.log('Servidor rodando em http://localhost:3000/');
//});

var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET index. */ 
router.get('/', async (req, res, next) => {
  try {
    const funcionarios = await db.findAll();
    res.render('index', { title: 'Funcionarios', funcionarios });
  } catch (err) {
    next(err);
  }
})

module.exports = router;


//inclui módulo http
var http = require('http');
//inclui módulo express
var express = require('express');

//Cria variável app, pela qual acessamos métodos e funções do framework express
var app = express();

//metodo use() utilizado para definir em qual pasta estará o conteúdo estático
app.use(express.static('./public'));

//Cria o servidor
var server = http.createServer(app);

//define a porta
server.listen(80);

//Mensagem exibida no console para debug
console.log("Servidor rodando...");

const uri = `mongodb+srv://Lucas:Kc0Ptv2CHyid5qja@lucas.oi98t.mongodb.net/?retryWrites=true&w=majority&appName=Lucas`
// Pacotes  necessários
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { render } = require('ejs');
const MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://Lucas:Kc0Ptv2CHyid5qja@lucas.oi98t.mongodb.net/?retryWrites=true&w=majority&appName=Lucas`;

const client = new MongoClient(uri, { useNewUrlParser: true });

var app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(80, () => {
  console.log('server started');
});

app.get('/', (req, res) => {
  res.redirect("usuarios/cadastro.html");
});

/////////////////////////////////////////////////////////////////////////
// Usuários

app.post("/cadastrar_usuario", function(req, resp) {

    // salva dados no banco
    client.db("exemplo_bd").collection("usuarios").insertOne(
      { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha }, function (err) {
      if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao cadastrar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário cadastrado com sucesso!"})        
      };
    });

});


app.post("/logar_usuario", function(req, resp) {

    // busca um usuário no banco de dados
    client.db("exemplo_bd").collection("usuarios").find(
      {db_login: req.body.login, db_senha: req.body.senha }).toArray(function(err, items) {
        console.log(items);
        if (items.length == 0) {
          resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
        }else if (err) {
          resp.render('resposta_usuario', {resposta: "Erro ao logar usuário!"})
        }else {
          resp.render('resposta_usuario', {resposta: "Usuário logado com sucesso!"})        
        };
      });

});


app.get("/listar_usuarios", function(req, resp) {

    // busca todos os usuarios no banco de dados
    client
      .db("exemplo_bd")
      .collection("usuarios")
      .find().toArray(function(err, items) {
        // renderiza a resposta para o navegador
        resp.render("lista_usuarios", { usuarios: items });
      });

});


app.post("/atualizar_usuario", function(req, resp) {

    // atualiza senha do usuário
    client.db("exemplo_bd").collection("usuarios").updateOne(
        { db_login: req.body.login, db_senha: req.body.senha }, 
        { $set: {db_senha: req.body.novasenha} }, function (err, result) {
          console.log(result);
          if (result.modifiedCount == 0) {
            resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
          }else if (err) {
            resp.render('resposta_usuario', {resposta: "Erro ao atualizar usuário!"})
          }else {
            resp.render('resposta_usuario', {resposta: "Usuário atualizado com sucesso!"})        
          };
    });

});


app.post("/remover_usuario", function(req, resp) {

    // remove do usuário
    client.db("exemplo_bd").collection("usuarios").deleteOne(
      { db_login: req.body.login, db_senha: req.body.senha } , function (err, result) {
        console.log(result);
        if (result.deletedCount == 0) {
          resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
        }else if (err) {
          resp.render('resposta_usuario', {resposta: "Erro ao remover usuário!"})
        }else {
          resp.render('resposta_usuario', {resposta: "Usuário removido com sucesso!"})        
        };
      });
});

const express = require('express');//'express' esta dentro da pasta node_modules
const app = express();
const routes = require('./routes');

/**
 * DRUD => CREATE(POST, criar), READ(GET, ler), UPDATE(PUT, atualizar), DELETE(DELETE, apagar)
 * 
 * req => requisição, res => resposta
 * 
 * http://meusite.com/ <- GET -> entregue a pagina/
 * http://meusite.com/sobre <- GET -> entregue a pagina/sobre
 */

app.use(express.urlencoded({extended: true}));//para tratar o 'body' das requisições 
app.use(routes);

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
    console.log('Acessar http://localhost:3000');
});
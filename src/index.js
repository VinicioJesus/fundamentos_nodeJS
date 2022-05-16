/*
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação especifica
 * DELETE - Deletar uma informação no servidor
 */

//importa o pacote ou o express em si.
const { request, response, application } = require("express");
const express = require("express");
//chama a função do express
const app = express();

// o express possui todos os metodos http, sendo: GET, POST, PUT, DELETE, UPDATE
//Vamos usar a função get para utilizar nosso express, usando o get que recebe o (PATH ,
//Se quisermos chamar nosso servidor localhost:3333 devemos colocar o que estiver no PATH do get( por exemplo "/ignite",localhost:3333/)
// depois passaremos o request e response como parametro,
// REQUEST é tudo aquilo que estamos recebendo da nossa requisição,
// RESPONSE tudo aquilo que retornamos para a requisição
app.get("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 4"]);
});
//Precisamos definir uma porta para dizer onde a nossa aplicação está rodando.
//Quando chamamos o listen estamos pedindo que o express dê o start na aplicação
//e precisamos passar uma porta para ele.
//Se passarmos a porta 3031 então poderemos acessar ela como //localhost:3031
app.listen(3333);

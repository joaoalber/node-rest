/*
    npm init -y
    npm install express body-parser
    npm i -D nodemon
    npx nodemon
*/

const express = require('express');
const bodyParser = require('body-parser');
const tarefasRouter = require('./routes/tarefas-router');

const app = express();

app.use(bodyParser.json());
app.use('/tarefas', tarefasRouter);

app.listen(3000, () => {
    console.log('Executando em localhost:3000');
})
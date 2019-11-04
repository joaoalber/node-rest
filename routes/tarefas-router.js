const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefas-controller');

router.get('/', tarefasController.getTarefas);

module.exports = router;
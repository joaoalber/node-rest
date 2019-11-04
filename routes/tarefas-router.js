const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefas-controller');

router.get('/', tarefasController.getTarefas);
router.post('/', tarefasController.postTarefa);
router.get('/:idTarefa', tarefasController.getTarefa);

module.exports = router;
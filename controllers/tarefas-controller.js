const tarefas = []

exports.getTarefas = (req, res, next) => {
    res.json(tarefas);
}
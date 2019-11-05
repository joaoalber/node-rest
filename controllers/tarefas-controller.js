const tarefas = [
    { id: 1, descricao: 'teste', pronto: true },
    { id: 2, descricao: 'teste2', pronto: true },
    { id: 3, descricao: 'teste3', pronto: true },
    { id: 4, descricao: 'teste4', pronto: false }
]

exports.getTarefas = (req, res, next) => {
    res.json(tarefas);
}

exports.postTarefa = (req, res, next) => {
    const descricao = req.body.descricao;
    const pronto = req.body.pronto;
    const id = tarefas.reduce((valorAnterior, tarefa) => Math.max(valorAnterior, tarefa.id + 1), 0);
    const novaTarefa = { id, descricao, pronto };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
};

exports.getTarefa = (req, res, next) => {
    const idTarefa = req.params.idTarefa;
    let tarefa = tarefas.find(o => o.id == idTarefa);
    if (tarefa) { return res.status(201).json(tarefa) };
    return res.status(404).json({})
};

exports.putTarefa = (req, res, next) => {};

exports.deleteTarefa = (req, res, next) => {
    const idTarefa = req.params.idTarefa
    const removeByPosition = tarefas.findIndex(t => t.id == idTarefa)
    tarefas.splice(removeByPosition, 1);
    res.json(tarefas);
};
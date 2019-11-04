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
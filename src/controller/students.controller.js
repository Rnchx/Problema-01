export const buscarTodosAlunos = (req, res) => {
    res.status(200)
        .send({
            message: "Todos alunos via controller",
        });
};

export const buscarTodosAlunosPorId = (req, res) => {
    const { id } = req.params
    res.status(200)
        .send({
            message: `Aluno com ID ${id}`, origem: "Controller", status: "OK"
        });
};

export const criarAluno = (req, res) => {
    const { nome, email, idade } = req.body;

    if (!nome || !email || !idade) {
        res.status(400)
            .send({
                error: 'Dados insuficientes',
                origem: "Controller"
            });
    }

    res.status(201).send({
        message: "Rota POST Aluno cadastrado com sucesso!",
        origem: "Controller"
    });
};

export const deletarAluno = (req, res) => {
    const { id } = req.params;

    res.status(200)
    .send({
        message: `Deletando o aluno de ID ${id}`,
        origem: "Controller"
    })
}

export const atualizarAluno = (req, res) => {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    if (!nome || !email || !idade) {
        res.status(400)
            .send({
                error: 'Dados insuficientes',
                origem: "Controller"
            });
    }

    res.status(200).send({
        message: `Atualizando os dados do aluno de ID ${id}`,
        origem: "Controller"
    })
}
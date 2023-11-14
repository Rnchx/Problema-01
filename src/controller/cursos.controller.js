import { Curso } from '../models/Curso.js'
import { CursosList } from '../models/CursosList.js'

const InstanciaCursosList = new CursosList();

export const buscarTodosCursos = (req, res) => {
    const cursos = InstanciaCursosList.getAllCursos();

    if (!cursos, length) {
        return res.status(401).send({ error: "Não há nenhum curso cadastrado", status: "NOT FOUND ❌" });
    }

    return res.status(200)
        .send({
            message: "Todos Cursos via controller",
            status: "OK ✔"
        });
};

export const buscarTodosCursosPorId = (req, res) => {
    const { id } = req.params

    const cursos = InstanciaCursosList.getAllCursosPorId(id);

    if (!cursos) {
        return res.status(401).send({ error: "O ID informado não existe!", origem: "Controller", status: "NOT FOUND ❌" });
    }

    res.status(200)
        .send({
            message: `Curso com ID ${id}`, origem: "Controller", status: "OK ✔"
        });
};

export const criarCurso = (req, res) => {
    const { curso, duracao, descricao } = req.body;
    const nvCurso = new Curso(curso, duracao, descricao);

    InstanciaCursosList.CriarCurso(curso);

    res.status(201).send({ nvCurso });
};

export const deletarCurso = (req, res) => {
    const { id } = req.params;
    const curso = InstanciaCursosList.getAllCursosPorId(id);

    if (!curso) {
        res.status(404).send("Curso não encontrado");
    }

    InstanciaCursosList.excluirCurso(id);

    res.status(200).send({ curso });
}

export const atualizarCurso = (req, res) => {
    const { id } = req.params;
    const { curso, duracao, descricao } = req.body;

    const curSo = InstanciaCursosList.getAllCursosPorId(id);

    if (!curSo) {
        res.status(404).send("Curso não encontrado");
    }

    InstanciaCursosList.atualizarCurso(id, curso, duracao, descricao);

    return res.status(200).send({ curSo });
}
export class CursosList {
    constructor() {
        this.cursos = []
    }

    getAllCursos() {
        return this.cursos;
    }

    getAllCursosPorId(id) {
        return this.cursos.find((cursos) => cursos.id === id);
    }

    CriarCurso(curso) {
        this.cursos.push(curso)
    }

    atualizarCurso(id, curso, duracao, descricao) {
        const curSo = this.getAllCursosPorId(id);

        if (!curSo) {
            return null;
        }

        curSo.curso = curso;
        curSo.duracao = duracao;
        curSo.descricao = descricao;

        return curSo;
    }

    excluirCurso(id) {
        this.cursos = this.cursos.filter(cursos => cursos.id !== id);
    }
}

export default CursosList
import  { v4 as uuidv4 } from 'uuid';

export class Curso {
    constructor(curso, duracao, descricao) {
        this.id = uuidv4();
        this.curso = curso;
        this.duracao = duracao;
        this.descricao = descricao;
    }
}

export default Curso
import { Router } from 'express'
import rotasAlunos from './students.routes.js';
import rotasCursos from './cursos.routes.js';

export const rotas = Router();
export const rotas2 = Router();

rotas.use("/alunos", rotasAlunos)
rotas2.use("/cursos", rotasCursos)


rotas.get("/", (req, res) => {
     res.status(200).send({ message: "servidor OK 👌!" });
})
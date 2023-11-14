import { Router } from "express";
import {
    buscarTodosCursos,
    buscarTodosCursosPorId,
    criarCurso,
    atualizarCurso,
    deletarCurso
} from "../controller/cursos.controller.js";

const rotasCursos = Router();

rotasCursos.get("/", buscarTodosCursos);
rotasCursos.get("/:id", buscarTodosCursosPorId);
rotasCursos.post("/", criarCurso);
rotasCursos.delete("/:id", deletarCurso);
rotasCursos.put("/:id", atualizarCurso);

export default rotasCursos
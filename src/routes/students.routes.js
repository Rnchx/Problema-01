import { Router } from "express";
import {
    buscarTodosAlunos,
    buscarTodosAlunosPorId,
    criarAluno,
    atualizarAluno,
    deletarAluno
} from "../controller/students.controller.js";



const rotasAlunos = Router();

rotasAlunos.get("/", buscarTodosAlunos);
rotasAlunos.get("/:id", buscarTodosAlunosPorId);
rotasAlunos.post("/", criarAluno);
rotasAlunos.delete("/:id", deletarAluno);
rotasAlunos.put("/:id", atualizarAluno);

export default rotasAlunos;


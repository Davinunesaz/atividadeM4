import { Router } from "express";
import blogController from "../controller/blog.controller.js";

const comentario = Router();

comentario.get("/", blogController.getComentarios);

comentario.post("/cadastrar", blogController.CadastrarComentario);

comentario.put("/atualizar/:id", blogController.atualizarComentario);

comentario.delete("/deletar/:id", blogController.DeletarComentario);

export default comentario;
import { Blog } from "../model/blog.modal.js";
import { v4 as uuidv4 } from 'uuid';
import { logEvents } from "../middlewares/logger.middlewares.js";

class BlogController {
    getComentarios(req,res){
        res.status(200).json(Blog.comentarios);
    }

    CadastrarComentario(req,res){
        const { titulo, conteudo, autor, data } = req.body;

        if (!titulo || !conteudo || !autor || !data) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }

        const comentario = new Blog(uuidv4(),titulo, conteudo, autor, data);
        Blog.comentarios.push(comentario);
        res.status(201).json({message: "Comentário cadastrado com sucesso!",comentario});
    }


    DeletarComentario(req,res){
        const { id } = req.params;
        const comentarioIndex = Blog.comentarios.findIndex(comentario => comentario.id === id);

        if (comentarioIndex === -1) {
            return res.status(404).json({ error: "Comentário não encontrado." });
        }

        Blog.comentarios.splice(comentarioIndex, 1);
        res.status(200).json({ message: "Comentário deletado com sucesso!" });
    }
}

export default new BlogController();
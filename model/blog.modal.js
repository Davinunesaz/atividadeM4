export class Blog{
    constructor(id,titulo,conteudo,autor,data){
        this.id = id;
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.autor = autor;
        this.data = data;
    }

    static comentarios = [{
        id: "1",
        titulo: "Título do comentário",
        conteudo: "Conteúdo do comentário",
        autor: "Autor do comentário",
        data: "Data do comentário"
    }
    ];

    salvarComentario(comentario){
        Blog.comentarios.push(comentario);
    }
}





import express from 'express';
import { logEvents,logger } from './middlewares/logger.middlewares.js';
import comentario from './router/blog.router.js';
const app = express();
const PORT = 3000;

app.use(logger);
app.use(express.json());

app.use("/",comentario);

app.listen(PORT, () => {
    logEvents(`Rodando o Servidor na porta ${PORT}`, "listener.log");
  });
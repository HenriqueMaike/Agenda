import { Router, Request, Response } from "express";
import { AgendaController } from "./controllers/agendar/AgendaController";
import { DeletarController } from "./controllers/agendar/DeletarController";
import { ExibirAgendaController } from "./controllers/agendar/ExibirAgendaController";

const router = Router();

router.post('/agendar', new AgendaController().handle)

router.get('/exibir', new ExibirAgendaController().handle)

router.delete('/deletar', new DeletarController().handle)

export { router }

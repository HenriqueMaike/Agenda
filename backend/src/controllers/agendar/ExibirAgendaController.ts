import { Request, Response } from "express";
import { ExibirAgendaService } from "../../services/agendar/ExibirAgendaService";

class ExibirAgendaController{
    async handle(req: Request, res: Response){

        const id = req.query.id as string;

        const exibirAgendaService = new ExibirAgendaService();

        const exibir = await exibirAgendaService.execute({
            id
        });

        return res.json(exibir)

    }
}

export {ExibirAgendaController}
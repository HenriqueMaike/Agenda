import { Request, Response } from "express";
import { AgendaService } from "../../services/agendar/AgendaService";

class AgendaController{
    async handle(req: Request, res: Response){
        const {name, descricao, data} = req.body;

        const agendaService = new AgendaService();

        const agenda = await agendaService.execute({
            name, 
            descricao, 
            data
        })

        return res.json(agenda);
    }
}

export {AgendaController}
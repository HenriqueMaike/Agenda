import { Request, Response } from "express";
import { DeletarService } from "../../services/agendar/DeletarService";

class DeletarController{
    async handle(req: Request, res: Response){
        const id = req.query.id as string;

        const deletarService = new DeletarService();

        const deletar = await deletarService.execute({
            id
        })

        return res.json(deletar);
    }
}

export {DeletarController}
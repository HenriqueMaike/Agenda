import prismaCliente from "../../prisma";

interface AgendaRequest{
    name: string;
    descricao: string;
    data: string;
}

class AgendaService{
    async execute({name, descricao, data}: AgendaRequest){
        
        const agenda = await prismaCliente.agenda.create({
            data:{
                name: name,
                descricao: descricao,
                data: data,
            }   
        })

        return agenda;

    }
}

export {AgendaService}
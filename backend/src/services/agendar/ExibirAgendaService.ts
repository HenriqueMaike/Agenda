import prismaCliente from "../../prisma";

interface ExibirRequest{
    id: string;
}

class ExibirAgendaService{
    async execute({id}: ExibirRequest){

    const exibir = await prismaCliente.agenda.findMany({
        where:{
            id: id,
        },
        select:{
            id: true,
            name: true,
            descricao: true,
            data: true,
            created_at: true,
        }
    })

    return exibir;

    }
}

export {ExibirAgendaService}
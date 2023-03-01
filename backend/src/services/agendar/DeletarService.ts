import prismaCliente from "../../prisma";

interface DeletarRequest{
    id: string;
}

class DeletarService{
    async execute({id}: DeletarRequest){

        const deletar = await prismaCliente.agenda.delete({
            where:{
                id: id
            }
        })

        return deletar;

    }
}

export {DeletarService}
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@Injectable()
export class ContatosService {
    constructor(private prisma: PrismaService) { }

    async create(createContatoDto: CreateContatoDto) {
        const { id_clientes, ...contatoData } = createContatoDto;

        // Criar o contato no banco de dados
        const contato = await this.prisma.contato.create({
            data: contatoData,
        });

        // Se o array de id_clientes foi fornecido, vincular o contato aos clientes
        if (id_clientes && id_clientes.length > 0) {
            await this.prisma.clienteContato.createMany({
                data: id_clientes.map(clienteId => ({
                    id_cliente: clienteId,
                    id_contato: contato.id_contato,
                })),
                skipDuplicates: true, // Evita duplicatas caso algum já exista
            });

            // Retornar o contato criado com os clientes vinculados
            return this.findOne(contato.id_contato);
        }

        return contato;
    }

    async findAll() {
        return this.prisma.contato.findMany();
    }

    async findOne(id: number) {
        const contato = await this.prisma.contato.findUnique({
            where: { id_contato: id },
            include: {
                clientesContatos: {
                    include: {
                        cliente: true,
                    },
                },
            },
        });

        if (!contato) {
            throw new NotFoundException(`Contato com ID ${id} não encontrado`);
        }

        return contato;
    }

    async update(id: number, updateContatoDto: UpdateContatoDto) {
        const { id_clientes, ...contatoData } = updateContatoDto as any;

        try {
            // Atualiza os dados do contato
            const contato = await this.prisma.contato.update({
                where: { id_contato: id },
                data: contatoData,
            });

            // Se um array de id_clientes foi fornecido, atualiza os relacionamentos
            if (id_clientes && Array.isArray(id_clientes)) {
                // Primeiro, remove todos os relacionamentos existentes
                await this.prisma.clienteContato.deleteMany({
                    where: {
                        id_contato: id
                    },
                });

                // Depois, cria os novos relacionamentos
                if (id_clientes.length > 0) {
                    await this.prisma.clienteContato.createMany({
                        data: id_clientes.map(clienteId => ({
                            id_cliente: clienteId,
                            id_contato: id,
                        })),
                        skipDuplicates: true,
                    });
                }

                // Retorna o contato atualizado com os clientes vinculados
                return this.findOne(id);
            }

            return contato;
        } catch (error) {
            throw new NotFoundException(`Contato com ID ${id} não encontrado`);
        }
    }

    async remove(id: number) {
        try {
            return await this.prisma.contato.delete({
                where: { id_contato: id },
            });
        } catch (error) {
            throw new NotFoundException(`Contato com ID ${id} não encontrado`);
        }
    }

    async vinculateToClient(clienteId: number, contatoId: number) {
        try {
            return await this.prisma.clienteContato.create({
                data: {
                    id_cliente: clienteId,
                    id_contato: contatoId,
                },
                include: {
                    cliente: true,
                    contato: true,
                }
            });
        } catch (error) {
            throw new NotFoundException(`Não foi possível vincular o contato ${contatoId} ao cliente ${clienteId}`);
        }
    }

    async removeFromClient(clienteId: number, contatoId: number) {
        try {
            return await this.prisma.clienteContato.delete({
                where: {
                    id_cliente_id_contato: {
                        id_cliente: clienteId,
                        id_contato: contatoId,
                    },
                },
            });
        } catch (error) {
            throw new NotFoundException(`Vínculo entre cliente ${clienteId} e contato ${contatoId} não encontrado`);
        }
    }

    async getClientContacts(clienteId: number) {
        try {
            const clienteContatos = await this.prisma.clienteContato.findMany({
                where: {
                    id_cliente: clienteId,
                },
                include: {
                    contato: true,
                },
            });

            return clienteContatos.map(cc => cc.contato);
        } catch (error) {
            throw new NotFoundException(`Cliente com ID ${clienteId} não encontrado`);
        }
    }
}
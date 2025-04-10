import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@Injectable()
export class ContatosService {
    constructor(private prisma: PrismaService) { }

    async create(createContatoDto: CreateContatoDto) {
        return this.prisma.contato.create({
            data: createContatoDto,
        });
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
        try {
            return await this.prisma.contato.update({
                where: { id_contato: id },
                data: updateContatoDto,
            });
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
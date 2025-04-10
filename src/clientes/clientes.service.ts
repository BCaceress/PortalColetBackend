import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
    constructor(private prisma: PrismaService) { }

    async create(createClienteDto: CreateClienteDto) {
        return this.prisma.cliente.create({
            data: createClienteDto,
        });
    }

    async findAll() {
        return this.prisma.cliente.findMany();
    }

    async findOne(id: number) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { id_cliente: id },
            include: {
                clientesContatos: {
                    include: {
                        contato: true,
                    },
                },
                emails: true,
            },
        });

        if (!cliente) {
            throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
        }

        return cliente;
    }

    async update(id: number, updateClienteDto: UpdateClienteDto) {
        try {
            return await this.prisma.cliente.update({
                where: { id_cliente: id },
                data: updateClienteDto,
            });
        } catch (error) {
            throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
        }
    }

    async remove(id: number) {
        try {
            return await this.prisma.cliente.delete({
                where: { id_cliente: id },
            });
        } catch (error) {
            throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
        }
    }
}
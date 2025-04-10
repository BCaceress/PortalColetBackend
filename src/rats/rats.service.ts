import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRatDto } from './dto/create-rat.dto';
import { UpdateRatDto } from './dto/update-rat.dto';

@Injectable()
export class RatsService {
    constructor(private prisma: PrismaService) { }

    async create(createRatDto: CreateRatDto) {
        return this.prisma.rAT.create({
            data: createRatDto,
        });
    }

    async findAll() {
        return this.prisma.rAT.findMany({
            include: {
                cliente: true,
                contato: true,
                usuario: true,
            },
        });
    }

    async findOne(id: number) {
        const rat = await this.prisma.rAT.findUnique({
            where: { id_rat: id },
            include: {
                cliente: true,
                contato: true,
                usuario: true,
            },
        });

        if (!rat) {
            throw new NotFoundException(`RAT com ID ${id} não encontrado`);
        }

        return rat;
    }

    async update(id: number, updateRatDto: UpdateRatDto) {
        try {
            return await this.prisma.rAT.update({
                where: { id_rat: id },
                data: updateRatDto,
            });
        } catch (error) {
            throw new NotFoundException(`RAT com ID ${id} não encontrado`);
        }
    }

    async remove(id: number) {
        try {
            return await this.prisma.rAT.delete({
                where: { id_rat: id },
            });
        } catch (error) {
            throw new NotFoundException(`RAT com ID ${id} não encontrado`);
        }
    }

    async findByUsuario(usuarioId: number) {
        return this.prisma.rAT.findMany({
            where: { id_usuario: usuarioId },
            include: {
                cliente: true,
                contato: true,
                usuario: true,
            },
        });
    }

    async findByCliente(clienteId: number) {
        return this.prisma.rAT.findMany({
            where: { id_cliente: clienteId },
            include: {
                cliente: true,
                contato: true,
                usuario: true,
            },
        });
    }

    async findByContato(contatoId: number) {
        return this.prisma.rAT.findMany({
            where: { id_contato: contatoId },
            include: {
                cliente: true,
                contato: true,
                usuario: true,
            },
        });
    }
}
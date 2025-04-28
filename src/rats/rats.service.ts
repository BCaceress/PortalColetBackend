import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRatDto } from './dto/create-rat.dto';
import { UpdateRatDto } from './dto/update-rat.dto';

@Injectable()
export class RatsService {
    constructor(private prisma: PrismaService) { }

    async create(createRatDto: CreateRatDto) {
        const { id_rat, ...ratData } = createRatDto;

        // Check if ID is provided and if it's already in use
        if (id_rat !== undefined) {
            const ratWithId = await this.prisma.rAT.findUnique({
                where: { id_rat },
            });

            if (ratWithId) {
                throw new ConflictException(`RAT com ID ${id_rat} já existe`);
            }
        }

        // Get the next ID if not provided
        let nextId = id_rat;
        if (nextId === undefined) {
            const lastRat = await this.prisma.rAT.findFirst({
                orderBy: { id_rat: 'desc' },
            });
            nextId = lastRat ? lastRat.id_rat + 1 : 1;
        }

        // Cria um novo objeto sem campos undefined
        const data = Object.fromEntries(
            Object.entries(ratData)
                .filter(([_, value]) => value !== undefined)
        );

        return this.prisma.rAT.create({
            data: {
                ...data as any, // Usamos 'any' para evitar problemas de tipagem
                id_rat: nextId
            },
        });
    }

    async findAll() {
        return this.prisma.rAT.findMany({
            orderBy: {
                id_rat: 'desc'  // Order by id_rat in descending order
            },
            include: {
                cliente: {
                    select: {
                        id_cliente: true,
                        ds_nome: true
                    }
                },
                contato: {
                    select: {
                        id_contato: true,
                        ds_nome: true
                    }
                },
                usuario: {
                    select: {
                        id_usuario: true,
                        nome: true
                    }
                },
            },
        });
    }

    async findOne(id: number) {
        const rat = await this.prisma.rAT.findUnique({
            where: { id_rat: id },
            include: {
                cliente: {
                    select: {
                        id_cliente: true,
                        ds_nome: true
                    }
                },
                contato: {
                    select: {
                        id_contato: true,
                        ds_nome: true
                    }
                },
                usuario: {
                    select: {
                        id_usuario: true,
                        nome: true
                    }
                },
            },
        });

        if (!rat) {
            throw new NotFoundException(`RAT com ID ${id} não encontrado`);
        }

        return rat;
    }

    async update(id: number, updateRatDto: UpdateRatDto) {
        try {
            // Cria um novo objeto sem campos undefined
            const data = Object.fromEntries(
                Object.entries(updateRatDto)
                    .filter(([_, value]) => value !== undefined)
            );

            return await this.prisma.rAT.update({
                where: { id_rat: id },
                data: data as any, // Usamos 'any' para evitar problemas de tipagem
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
                cliente: {
                    select: {
                        id_cliente: true,
                        ds_nome: true
                    }
                },
                contato: {
                    select: {
                        id_contato: true,
                        ds_nome: true
                    }
                },
                usuario: {
                    select: {
                        id_usuario: true,
                        nome: true
                    }
                },
            },
        });
    }

    async findByCliente(clienteId: number) {
        return this.prisma.rAT.findMany({
            where: { id_cliente: clienteId },
            include: {
                cliente: {
                    select: {
                        id_cliente: true,
                        ds_nome: true
                    }
                },
                contato: {
                    select: {
                        id_contato: true,
                        ds_nome: true
                    }
                },
                usuario: {
                    select: {
                        id_usuario: true,
                        nome: true
                    }
                },
            },
        });
    }

    async findByContato(contatoId: number) {
        return this.prisma.rAT.findMany({
            where: { id_contato: contatoId },
            include: {
                cliente: {
                    select: {
                        id_cliente: true,
                        ds_nome: true
                    }
                },
                contato: {
                    select: {
                        id_contato: true,
                        ds_nome: true
                    }
                },
                usuario: {
                    select: {
                        id_usuario: true,
                        nome: true
                    }
                },
            },
        });
    }
}
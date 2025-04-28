import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBaseConhecimentoDto } from './dto/create-base-conhecimento.dto';
import { UpdateBaseConhecimentoDto } from './dto/update-base-conhecimento.dto';

@Injectable()
export class BaseConhecimentoService {
    constructor(private prisma: PrismaService) { }

    async create(createBaseConhecimentoDto: CreateBaseConhecimentoDto) {
        const { id_base_conhecimento, ...baseConhecimentoData } = createBaseConhecimentoDto as any;

        // Check if ID is provided and if it's already in use
        if (id_base_conhecimento !== undefined) {
            const baseConhecimentoWithId = await this.prisma.baseConhecimento.findUnique({
                where: { id_base_conhecimento },
            });

            if (baseConhecimentoWithId) {
                throw new ConflictException(`Base de conhecimento com ID ${id_base_conhecimento} já existe`);
            }
        }

        // Get the next ID if not provided
        let nextId = id_base_conhecimento;
        if (nextId === undefined) {
            const lastBaseConhecimento = await this.prisma.baseConhecimento.findFirst({
                orderBy: { id_base_conhecimento: 'desc' },
            });
            nextId = lastBaseConhecimento ? lastBaseConhecimento.id_base_conhecimento + 1 : 1;
        }

        // Create the base knowledge
        return this.prisma.baseConhecimento.create({
            data: {
                ...baseConhecimentoData,
                id_base_conhecimento: nextId
            },
        });
    }

    async findAll() {
        return this.prisma.baseConhecimento.findMany({
            include: {
                usuario: {
                    select: {
                        nome: true,
                    }
                }
            },
            orderBy: {
                ds_titulo: 'asc'
            }
        });
    }

    async findOne(id: number) {
        const baseConhecimento = await this.prisma.baseConhecimento.findUnique({
            where: { id_base_conhecimento: id },
            include: {
                usuario: {
                    select: {
                        id_usuario: true,
                        nome: true,
                        email: true,
                        funcao: true
                    }
                }
            }
        });

        if (!baseConhecimento) {
            throw new NotFoundException(`Base de conhecimento com ID ${id} não encontrada`);
        }

        return baseConhecimento;
    }

    async update(id: number, updateBaseConhecimentoDto: UpdateBaseConhecimentoDto) {
        try {
            // Verify if the base knowledge exists
            await this.findOne(id);

            // Update the base knowledge
            return this.prisma.baseConhecimento.update({
                where: { id_base_conhecimento: id },
                data: updateBaseConhecimentoDto as any,
                include: {
                    usuario: {
                        select: {
                            id_usuario: true,
                            nome: true,
                            email: true,
                            funcao: true
                        }
                    }
                }
            });
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new NotFoundException(`Base de conhecimento com ID ${id} não encontrada`);
        }
    }

    async remove(id: number) {
        try {
            // Verify if the base knowledge exists
            await this.findOne(id);

            // Delete the base knowledge
            return this.prisma.baseConhecimento.delete({
                where: { id_base_conhecimento: id }
            });
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new NotFoundException(`Base de conhecimento com ID ${id} não encontrada`);
        }
    }

    async findByCategoria(categoria: string) {
        const baseConhecimento = await this.prisma.baseConhecimento.findMany({
            where: {
                ds_categoria: categoria as any
            },
            include: {
                usuario: {
                    select: {
                        id_usuario: true,
                        nome: true,
                        email: true,
                        funcao: true
                    }
                }
            },
            orderBy: {
                ds_titulo: 'asc'
            }
        });

        return baseConhecimento;
    }

    async findByTipo(tipo: string) {
        const baseConhecimento = await this.prisma.baseConhecimento.findMany({
            where: {
                ds_tipo: tipo as any
            },
            include: {
                usuario: {
                    select: {
                        id_usuario: true,
                        nome: true,
                        email: true,
                        funcao: true
                    }
                }
            },
            orderBy: {
                ds_titulo: 'asc'
            }
        });

        return baseConhecimento;
    }

    async findByPermissao(permissao: string) {
        const baseConhecimento = await this.prisma.baseConhecimento.findMany({
            where: {
                ds_permissao: permissao as any
            },
            include: {
                usuario: {
                    select: {
                        id_usuario: true,
                        nome: true,
                        email: true,
                        funcao: true
                    }
                }
            },
            orderBy: {
                ds_titulo: 'asc'
            }
        });

        return baseConhecimento;
    }

    async findByUsuario(id_usuario: number) {
        const baseConhecimento = await this.prisma.baseConhecimento.findMany({
            where: { id_usuario },
            include: {
                usuario: {
                    select: {
                        id_usuario: true,
                        nome: true,
                        email: true,
                        funcao: true
                    }
                }
            },
            orderBy: {
                ds_titulo: 'asc'
            }
        });

        return baseConhecimento;
    }
}
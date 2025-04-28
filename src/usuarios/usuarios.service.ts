import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
    constructor(private prisma: PrismaService) { }

    async create(createUsuarioDto: CreateUsuarioDto) {
        const { email, senha, id_usuario } = createUsuarioDto;

        // Check if user with this email already exists
        const existingUser = await this.prisma.usuario.findUnique({
            where: { email },
        });

        if (existingUser) {
            throw new ConflictException('Email já está em uso');
        }

        // Check if ID is provided and if it's already in use
        if (id_usuario !== undefined) {
            const userWithId = await this.prisma.usuario.findUnique({
                where: { id_usuario },
            });

            if (userWithId) {
                throw new ConflictException(`Usuário com ID ${id_usuario} já existe`);
            }
        }

        // Get the next ID if not provided
        let nextId = id_usuario;
        if (nextId === undefined) {
            const lastUser = await this.prisma.usuario.findFirst({
                orderBy: { id_usuario: 'desc' },
            });
            nextId = lastUser ? lastUser.id_usuario + 1 : 1;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(senha, 10);

        // Create the new user with hashed password and the determined ID
        const newUser = await this.prisma.usuario.create({
            data: {
                ...createUsuarioDto,
                id_usuario: nextId,
                senha: hashedPassword,
            },
        });

        // Return user without the password
        const { senha: _, ...result } = newUser;
        return result;
    }

    async findAll(funcao?: string) {
        // Build the query with role filter if provided and always filter for active users
        const where = {
            fl_ativo: true,
            ...(funcao ? { funcao: funcao } : {}),
        };

        const usuarios = await this.prisma.usuario.findMany({
            where,
            orderBy: {
                nome: 'asc',
            },
        });

        // Remove passwords from the response
        return usuarios.map(({ senha, ...usuario }) => usuario);
    }

    async findOne(id: number) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id_usuario: id },
        });

        if (!usuario) {
            throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
        }

        // Return user without the password
        const { senha, ...result } = usuario;
        return result;
    }

    async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
        // Check if user exists
        const existingUser = await this.prisma.usuario.findUnique({
            where: { id_usuario: id },
        });

        if (!existingUser) {
            throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
        }

        // If updating email, check if the new email is already in use
        if (updateUsuarioDto.email && updateUsuarioDto.email !== existingUser.email) {
            const userWithEmail = await this.prisma.usuario.findUnique({
                where: { email: updateUsuarioDto.email },
            });

            if (userWithEmail) {
                throw new ConflictException('Email já está em uso');
            }
        }

        // If updating password, hash it
        let data = { ...updateUsuarioDto };
        if (updateUsuarioDto.senha) {
            data.senha = await bcrypt.hash(updateUsuarioDto.senha, 10);
        }

        // Update the user
        const updatedUser = await this.prisma.usuario.update({
            where: { id_usuario: id },
            data,
        });

        // Return user without the password
        const { senha, ...result } = updatedUser;
        return result;
    }

    async remove(id: number) {
        // Check if user exists
        const existingUser = await this.prisma.usuario.findUnique({
            where: { id_usuario: id },
        });

        if (!existingUser) {
            throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
        }

        await this.prisma.usuario.delete({
            where: { id_usuario: id },
        });

        return { message: 'Usuário removido com sucesso' };
    }
}
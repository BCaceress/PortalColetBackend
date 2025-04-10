import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
    constructor(private prisma: PrismaService) { }

    async create(createUsuarioDto: CreateUsuarioDto) {
        const { email, senha } = createUsuarioDto;

        // Check if user with this email already exists
        const existingUser = await this.prisma.usuario.findUnique({
            where: { email },
        });

        if (existingUser) {
            throw new ConflictException('Email já está em uso');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(senha, 10);

        // Create the new user with hashed password
        const newUser = await this.prisma.usuario.create({
            data: {
                ...createUsuarioDto,
                senha: hashedPassword,
            },
        });

        // Return user without the password
        const { senha: _, ...result } = newUser;
        return result;
    }

    async findAll() {
        const usuarios = await this.prisma.usuario.findMany();

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
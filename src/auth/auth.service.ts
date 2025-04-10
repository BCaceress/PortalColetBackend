import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private prisma: PrismaService,
    ) { }

    async login(loginDto: LoginDto) {
        const { email, senha } = loginDto;

        // Find the user by email
        const usuario = await this.prisma.usuario.findUnique({
            where: { email },
        });

        // If user doesn't exist or password doesn't match, throw an error
        if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        // Generate JWT token
        const payload = {
            sub: usuario.id_usuario,
            email: usuario.email,
            nome: usuario.nome,
            funcao: usuario.funcao,
        };

        return {
            access_token: this.jwtService.sign(payload),
            usuario: {
                id: usuario.id_usuario,
                nome: usuario.nome,
                email: usuario.email,
                funcao: usuario.funcao,
            },
        };
    }
}
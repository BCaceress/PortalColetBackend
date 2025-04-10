import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'coletportal_secret_key',
        });
    }

    async validate(payload: any) {
        // You can also check if the user still exists in the database here
        return {
            userId: payload.sub,
            email: payload.email,
            nome: payload.nome,
            funcao: payload.funcao,
        };
    }
}
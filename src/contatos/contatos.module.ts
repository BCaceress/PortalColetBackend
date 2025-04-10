import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ContatosController } from './contatos.controller';
import { ContatosService } from './contatos.service';

@Module({
    imports: [PrismaModule],
    controllers: [ContatosController],
    providers: [ContatosService],
    exports: [ContatosService],
})
export class ContatosModule { }
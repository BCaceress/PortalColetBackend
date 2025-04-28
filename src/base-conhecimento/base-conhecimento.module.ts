import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { BaseConhecimentoController } from './base-conhecimento.controller';
import { BaseConhecimentoService } from './base-conhecimento.service';

@Module({
    imports: [PrismaModule],
    controllers: [BaseConhecimentoController],
    providers: [BaseConhecimentoService],
    exports: [BaseConhecimentoService],
})
export class BaseConhecimentoModule { }
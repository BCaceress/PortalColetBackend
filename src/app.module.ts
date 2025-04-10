import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ClientesModule } from './clientes/clientes.module';
import { ContatosModule } from './contatos/contatos.module';
import { PrismaModule } from './prisma/prisma.module';
import { RatsModule } from './rats/rats.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    AuthModule,
    UsuariosModule,
    ClientesModule,
    ContatosModule,
    RatsModule,
  ],
})
export class AppModule { }

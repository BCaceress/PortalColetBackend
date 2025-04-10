import { ApiProperty } from '@nestjs/swagger';

export class Usuario {
    @ApiProperty({ description: 'ID único do usuário' })
    id_usuario: number;

    @ApiProperty({ description: 'Nome do usuário' })
    nome: string;

    @ApiProperty({ description: 'Email do usuário' })
    email: string;

    @ApiProperty({ description: 'Senha criptografada do usuário' })
    senha: string;

    @ApiProperty({ description: 'Função do usuário no sistema' })
    funcao: string;
}
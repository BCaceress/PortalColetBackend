import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsIn, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUsuarioDto {
    @ApiProperty({ description: 'Nome do usuário' })
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    nome: string;

    @ApiProperty({ description: 'Email do usuário', example: 'admin@admin.com' })
    @IsEmail({}, { message: 'Formato de email inválido' })
    @IsNotEmpty({ message: 'Email é obrigatório' })
    email: string;

    @ApiProperty({ description: 'Senha do usuário' })
    @IsNotEmpty({ message: 'Senha é obrigatória' })
    @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
    senha: string;

    @ApiProperty({ description: 'Função do usuário no sistema', example: 'admin', enum: ['admin', 'tecnico', 'gerente'] })
    @IsNotEmpty({ message: 'Função é obrigatória' })
    @IsIn(['admin', 'tecnico', 'gerente'], { message: 'Função deve ser: admin, tecnico ou gerente' })
    funcao: string;
}
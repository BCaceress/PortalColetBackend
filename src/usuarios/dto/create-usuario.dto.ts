import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, MinLength } from 'class-validator';

// Define the enum locally to match the schema
enum TipoFuncao {
    Administrador = 'Administrador',
    Analista = 'Analista',
    Desenvolvedor = 'Desenvolvedor',
    Implantador = 'Implantador',
    Suporte = 'Suporte'
}

export class CreateUsuarioDto {
    @ApiProperty({ description: 'ID do usuário (opcional para migração)', required: false })
    @IsOptional()
    @IsInt({ message: 'ID deve ser um número inteiro' })
    id_usuario?: number;

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

    @ApiProperty({ description: 'Função do usuário no sistema', example: 'Administrador', enum: TipoFuncao })
    @IsNotEmpty({ message: 'Função é obrigatória' })
    @IsEnum(TipoFuncao, { message: 'Função deve ser uma das seguintes: Administrador, Analista, Desenvolvedor, Implantador, Suporte' })
    funcao: TipoFuncao;

    @ApiProperty({
        description: 'Valor do quilômetro rodado',
        required: false,
        example: 1.50
    })
    @IsNumber()
    @IsOptional()
    nr_valor_km_rodado?: number;

    @ApiProperty({ description: 'Status do usuário (true = Ativo, false = Inativo)', default: true })
    @IsBoolean({ message: 'Status deve ser um valor booleano' })
    @IsOptional()
    fl_ativo?: boolean;
}
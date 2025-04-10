import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
    @ApiProperty({ description: 'Email do usuário', example: 'usuario@exemplo.com' })
    @IsEmail({}, { message: 'Formato de email inválido' })
    @IsNotEmpty({ message: 'Email é obrigatório' })
    email: string;

    @ApiProperty({ description: 'Senha do usuário' })
    @IsNotEmpty({ message: 'Senha é obrigatória' })
    @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
    senha: string;
}
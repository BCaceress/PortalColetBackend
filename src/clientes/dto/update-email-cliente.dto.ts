import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateEmailClienteDto {
    @ApiProperty({ description: 'Email do cliente', example: 'novo-email@empresa.com.br' })
    @IsEmail({}, { message: 'Formato de email inválido' })
    @IsNotEmpty()
    ds_email: string;
}
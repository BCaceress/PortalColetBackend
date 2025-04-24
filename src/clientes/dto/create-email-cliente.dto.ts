import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty } from 'class-validator';

export class CreateEmailClienteDto {
    @ApiProperty({ description: 'Email do cliente', example: 'contato@empresa.com.br' })
    @IsEmail({}, { message: 'Formato de email inválido' })
    @IsNotEmpty()
    ds_email: string;

    @ApiProperty({ description: 'ID do cliente', example: 1 })
    @IsInt()
    @IsNotEmpty()
    id_cliente: number;
}
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateContatoDto {
    @ApiProperty({ description: 'Nome do contato', example: 'João Silva' })
    @IsString()
    @IsNotEmpty()
    ds_nome: string;

    @ApiProperty({ description: 'Cargo do contato', example: 'Gerente de TI' })
    @IsString()
    @IsNotEmpty()
    ds_cargo: string;

    @ApiProperty({ description: 'Status de atividade do contato', example: true })
    @IsBoolean()
    @IsNotEmpty()
    fl_ativo: boolean;

    @ApiProperty({ description: 'Observações sobre o contato', required: false })
    @IsString()
    @IsOptional()
    tx_observacoes?: string;

    @ApiProperty({ description: 'Email do contato', example: 'joao.silva@empresa.com' })
    @IsEmail()
    @IsNotEmpty()
    ds_email: string;

    @ApiProperty({ description: 'Telefone do contato', example: '(11) 99999-9999' })
    @IsString()
    @IsNotEmpty()
    ds_telefone: string;

    @ApiProperty({ description: 'Indicador se o telefone é WhatsApp', example: true })
    @IsBoolean()
    @IsNotEmpty()
    fl_whatsapp: boolean;

    @ApiProperty({
        description: 'Array de IDs de clientes aos quais o contato será vinculado',
        example: [1, 2, 3],
        required: false,
        type: [Number]
    })
    @IsArray()
    @IsNumber({}, { each: true })
    @IsOptional()
    id_clientes?: number[];
}
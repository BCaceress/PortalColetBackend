import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateContatoDto {
    @IsString()
    @IsNotEmpty()
    ds_nome: string;

    @IsString()
    @IsNotEmpty()
    ds_cargo: string;

    @IsBoolean()
    @IsNotEmpty()
    fl_ativo: boolean;

    @IsString()
    @IsOptional()
    tx_observacoes?: string;

    @IsEmail()
    @IsNotEmpty()
    ds_email: string;

    @IsString()
    @IsNotEmpty()
    ds_telefone: string;

    @IsBoolean()
    @IsNotEmpty()
    fl_whatsapp: boolean;
}
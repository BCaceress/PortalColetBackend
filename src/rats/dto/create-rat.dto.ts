import { IsDate, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRatDto {
    @IsString()
    @IsNotEmpty()
    @IsIn(['Aberta', 'Em Andamento', 'Finalizada', 'Cancelada'])
    ds_status: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(['S', 'N'])
    fl_deslocamento: string;

    @IsDate()
    @IsNotEmpty()
    dt_data_hora_entrada: Date;

    @IsDate()
    @IsNotEmpty()
    dt_data_hora_saida: Date;

    @IsDate()
    @IsNotEmpty()
    tm_duracao: Date;

    @IsString()
    @IsNotEmpty()
    tx_comentario_interno: string;

    @IsString()
    @IsNotEmpty()
    ds_originada: string;

    @IsString()
    @IsNotEmpty()
    ds_observacao: string;

    @IsNumber()
    @IsOptional()
    nr_km_ida?: number;

    @IsNumber()
    @IsOptional()
    nr_km_volta?: number;

    @IsNumber()
    @IsOptional()
    nr_valor_pedagio?: number;

    @IsString()
    @IsNotEmpty()
    tx_atividades: string;

    @IsString()
    @IsNotEmpty()
    tx_tarefas: string;

    @IsString()
    @IsNotEmpty()
    tx_pendencias: string;

    @IsNumber()
    @IsNotEmpty()
    id_usuario: number;

    @IsNumber()
    @IsNotEmpty()
    id_cliente: number;

    @IsNumber()
    @IsNotEmpty()
    id_contato: number;
}
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRatDto {
    @ApiProperty({
        description: 'Status do RAT',
        example: 'Em Andamento',
        enum: ['Aberta', 'Em Andamento', 'Finalizada', 'Cancelada']
    })
    @IsString()
    @IsNotEmpty()
    @IsIn(['Aberta', 'Em Andamento', 'Finalizada', 'Cancelada'])
    ds_status: string;

    @ApiProperty({
        description: 'Indicador de deslocamento',
        example: 'S',
        enum: ['S', 'N']
    })
    @IsString()
    @IsNotEmpty()
    @IsIn(['S', 'N'])
    fl_deslocamento: string;

    @ApiProperty({
        description: 'Data e hora de entrada',
        example: '2025-01-01T08:00:00.000Z'
    })
    @IsDate()
    @IsNotEmpty()
    dt_data_hora_entrada: Date;

    @ApiProperty({
        description: 'Data e hora de saída',
        example: '2025-01-01T12:00:00.000Z'
    })
    @IsDate()
    @IsNotEmpty()
    dt_data_hora_saida: Date;

    @ApiProperty({
        description: 'Duração do atendimento',
        example: '04:00:00'
    })
    @IsDate()
    @IsNotEmpty()
    tm_duracao: Date;

    @ApiProperty({
        description: 'Comentários internos',
        example: 'Observações internas sobre o atendimento'
    })
    @IsString()
    @IsNotEmpty()
    tx_comentario_interno: string;

    @ApiProperty({
        description: 'Forma de originação',
        example: 'Telefone'
    })
    @IsString()
    @IsNotEmpty()
    ds_originada: string;

    @ApiProperty({
        description: 'Observações gerais',
        example: 'Observações sobre o atendimento'
    })
    @IsString()
    @IsNotEmpty()
    ds_observacao: string;

    @ApiProperty({
        description: 'Quilometragem de ida',
        required: false,
        example: 15
    })
    @IsNumber()
    @IsOptional()
    nr_km_ida?: number;

    @ApiProperty({
        description: 'Quilometragem de volta',
        required: false,
        example: 15
    })
    @IsNumber()
    @IsOptional()
    nr_km_volta?: number;

    @ApiProperty({
        description: 'Valor do pedágio',
        required: false,
        example: 12.50
    })
    @IsNumber()
    @IsOptional()
    nr_valor_pedagio?: number;

    @ApiProperty({
        description: 'Atividades realizadas',
        example: 'Instalação e configuração do sistema'
    })
    @IsString()
    @IsNotEmpty()
    tx_atividades: string;

    @ApiProperty({
        description: 'Tarefas pendentes',
        example: 'Treinamento dos usuários'
    })
    @IsString()
    @IsNotEmpty()
    tx_tarefas: string;

    @ApiProperty({
        description: 'Pendências',
        example: 'Aguardando autorização do cliente'
    })
    @IsString()
    @IsNotEmpty()
    tx_pendencias: string;

    @ApiProperty({
        description: 'ID do usuário responsável',
        example: 1
    })
    @IsNumber()
    @IsNotEmpty()
    id_usuario: number;

    @ApiProperty({
        description: 'ID do cliente',
        example: 1
    })
    @IsNumber()
    @IsNotEmpty()
    id_cliente: number;

    @ApiProperty({
        description: 'ID do contato',
        example: 1
    })
    @IsNumber()
    @IsNotEmpty()
    id_contato: number;
}
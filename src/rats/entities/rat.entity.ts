import { ApiProperty } from '@nestjs/swagger';

export class Rat {
    @ApiProperty({ description: 'ID único do RAT' })
    id_rat: number;

    @ApiProperty({ description: 'Status do RAT', example: 'Em Andamento' })
    ds_status: string;

    @ApiProperty({ description: 'Indicador de deslocamento', example: 'S' })
    fl_deslocamento: string;

    @ApiProperty({ description: 'Data e hora de entrada' })
    dt_data_hora_entrada: Date;

    @ApiProperty({ description: 'Data e hora de saída' })
    dt_data_hora_saida: Date;

    @ApiProperty({ description: 'Duração do atendimento', example: '04:00:00' })
    tm_duracao: string;

    @ApiProperty({ description: 'Comentários internos' })
    tx_comentario_interno: string;

    @ApiProperty({ description: 'Forma de originação', example: 'Telefone' })
    ds_originada: string;

    @ApiProperty({ description: 'Observações gerais' })
    ds_observacao: string;

    @ApiProperty({ description: 'Quilometragem de ida', required: false })
    nr_km_ida?: number;

    @ApiProperty({ description: 'Quilometragem de volta', required: false })
    nr_km_volta?: number;

    @ApiProperty({ description: 'Valor do pedágio', required: false })
    nr_valor_pedagio?: number;

    @ApiProperty({ description: 'Atividades realizadas' })
    tx_atividades: string;

    @ApiProperty({ description: 'Tarefas pendentes' })
    tx_tarefas: string;

    @ApiProperty({ description: 'Pendências' })
    tx_pendencias: string;

    @ApiProperty({ description: 'ID do usuário responsável' })
    id_usuario: number;

    @ApiProperty({ description: 'ID do cliente' })
    id_cliente: number;

    @ApiProperty({ description: 'ID do contato' })
    id_contato: number;
}
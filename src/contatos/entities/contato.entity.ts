import { ApiProperty } from '@nestjs/swagger';

export class Contato {
    @ApiProperty({ description: 'ID único do contato' })
    id_contato: number;

    @ApiProperty({ description: 'Nome do contato' })
    ds_nome: string;

    @ApiProperty({ description: 'Cargo do contato' })
    ds_cargo: string;

    @ApiProperty({ description: 'Status de atividade do contato', example: true })
    fl_ativo: boolean;

    @ApiProperty({ description: 'Observações sobre o contato', required: false })
    tx_observacoes?: string;

    @ApiProperty({ description: 'Email do contato', example: 'contato@exemplo.com' })
    ds_email: string;

    @ApiProperty({ description: 'Telefone do contato', example: '(11) 99999-9999' })
    ds_telefone: string;

    @ApiProperty({ description: 'Indicador se o telefone é WhatsApp', example: true })
    fl_whatsapp: boolean;
}
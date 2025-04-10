import { ApiProperty } from '@nestjs/swagger';

export class Cliente {
    @ApiProperty({ description: 'ID único do cliente' })
    id_cliente: number;

    @ApiProperty({ description: 'Status de atividade do cliente', example: true })
    fl_ativo: boolean;

    @ApiProperty({ description: 'Nome do cliente' })
    ds_nome: string;

    @ApiProperty({ description: 'Razão social do cliente' })
    ds_razao_social: string;

    @ApiProperty({ description: 'CNPJ do cliente', example: '00.000.000/0001-00' })
    nr_cnpj: string;

    @ApiProperty({ description: 'Inscrição estadual do cliente' })
    nr_inscricao_estadual: string;

    @ApiProperty({ description: 'Site do cliente', required: false })
    ds_site?: string;

    @ApiProperty({ description: 'Endereço do cliente' })
    ds_endereco: string;

    @ApiProperty({ description: 'CEP do cliente', example: '00000-000' })
    ds_cep: string;

    @ApiProperty({ description: 'UF do cliente', example: 'SP' })
    ds_uf: string;

    @ApiProperty({ description: 'Cidade do cliente' })
    ds_cidade: string;

    @ApiProperty({ description: 'Bairro do cliente' })
    ds_bairro: string;

    @ApiProperty({ description: 'Número do endereço' })
    nr_numero: string;

    @ApiProperty({ description: 'Complemento do endereço', required: false })
    ds_complemento?: string;

    @ApiProperty({ description: 'Código IBGE', required: false })
    nr_codigo_ibge?: string;

    @ApiProperty({ description: 'Latitude', required: false })
    nr_latitude?: number;

    @ApiProperty({ description: 'Longitude', required: false })
    nr_longitude?: number;

    @ApiProperty({ description: 'Distância em km', required: false })
    nr_distancia_km?: number;

    @ApiProperty({ description: 'Observação de identificação', required: false })
    tx_observacao_ident?: string;

    @ApiProperty({ description: 'Indicador se é matriz', example: true })
    fl_matriz: boolean;

    @ApiProperty({ description: 'Situação do cliente', example: 'Ativo' })
    ds_situacao: string;

    @ApiProperty({ description: 'Sistema utilizado pelo cliente' })
    ds_sistema: string;

    @ApiProperty({ description: 'Tipo de contrato' })
    ds_contrato: string;

    @ApiProperty({ description: 'Número de nomeados', example: 5 })
    nr_nomeados: number;

    @ApiProperty({ description: 'Número de simultâneos', example: 3 })
    nr_simultaneos: number;

    @ApiProperty({ description: 'Número de técnicas remotas', required: false })
    nr_tecnica_remoto?: number;

    @ApiProperty({ description: 'Número de técnicas presenciais', required: false })
    nr_tecnica_presencial?: number;

    @ApiProperty({ description: 'Mínimo de horas' })
    tm_minimo_horas: Date;

    @ApiProperty({ description: 'Indicador de diário de viagem' })
    ds_diario_viagem: string;

    @ApiProperty({ description: 'Região do cliente' })
    ds_regiao: string;

    @ApiProperty({ description: 'Observação do contrato' })
    tx_observacao_contrato: string;

    @ApiProperty({ description: 'Código ZZ' })
    nr_codigo_zz: number;

    @ApiProperty({ description: 'Franquia de NF' })
    nr_franquia_nf: number;

    @ApiProperty({ description: 'Quantidade de documentos' })
    nr_qtde_documentos: number;

    @ApiProperty({ description: 'Valor da franquia' })
    nr_valor_franqia: number;

    @ApiProperty({ description: 'Valor excedente' })
    nr_valor_excendente: number;

    @ApiProperty({ description: 'Data do contrato' })
    dt_data_contrato: Date;
}
import { ApiProperty } from '@nestjs/swagger';

export class Cliente {
    @ApiProperty({ description: 'ID único do cliente' })
    id_cliente: number;

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

    @ApiProperty({ description: 'Situação do cliente (Implantação, Produção, Restrição ou Inativo)', example: 'Produção' })
    ds_situacao: string;

    @ApiProperty({ description: 'Sistema utilizado pelo cliente' })
    ds_sistema: string;

    @ApiProperty({ description: 'Tipo de contrato' })
    ds_contrato: string;

    @ApiProperty({ description: 'Número de nomeados', example: 5, required: false })
    nr_nomeados?: number;

    @ApiProperty({ description: 'Número de simultâneos', example: 3, required: false })
    nr_simultaneos?: number;

    @ApiProperty({ description: 'Número de técnicas remotas', required: false })
    nr_tecnica_remoto?: number;

    @ApiProperty({ description: 'Número de técnicas presenciais', required: false })
    nr_tecnica_presencial?: number;

    @ApiProperty({ description: 'Mínimo de horas' })
    tm_minimo_horas: string;

    @ApiProperty({ description: 'Indicador de diário de viagem' })
    ds_diario_viagem: string;

    @ApiProperty({ description: 'Região do cliente', required: false })
    ds_regiao?: string;

    @ApiProperty({ description: 'Observação do contrato' })
    tx_observacao_contrato: string;

    @ApiProperty({ description: 'Código ZZ', required: false })
    nr_codigo_zz?: number;

    @ApiProperty({ description: 'Franquia de NF' })
    ds_franquia_nf: string;

    @ApiProperty({ description: 'Quantidade de documentos' })
    nr_qtde_documentos: number;

    @ApiProperty({ description: 'Valor da franquia' })
    nr_valor_franqia: number;

    @ApiProperty({ description: 'Valor excedente' })
    nr_valor_excendente: number;

    @ApiProperty({ description: 'Data do contrato' })
    dt_data_contrato: Date;

    @ApiProperty({ description: 'Indicador de NFe', example: false })
    fl_nfe: boolean;

    @ApiProperty({ description: 'Indicador de NFS-e', example: false })
    fl_nfse: boolean;

    @ApiProperty({ description: 'Indicador de NFC-e', example: false })
    fl_nfce: boolean;

    @ApiProperty({ description: 'Quantidade de PDV', required: false })
    nr_qtde_pdv?: number;

    @ApiProperty({ description: 'Valor do PDV', required: false })
    nr_valor_pdv?: number;
}
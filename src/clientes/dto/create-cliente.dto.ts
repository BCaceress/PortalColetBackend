import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateClienteDto {
    @ApiProperty({ description: 'Status de atividade do cliente', example: true })
    @IsBoolean()
    @IsNotEmpty()
    fl_ativo: boolean;

    @ApiProperty({ description: 'Nome do cliente', example: 'Empresa ABC' })
    @IsString()
    @IsNotEmpty()
    ds_nome: string;

    @ApiProperty({ description: 'Razão social do cliente', example: 'Empresa ABC LTDA' })
    @IsString()
    @IsNotEmpty()
    ds_razao_social: string;

    @ApiProperty({ description: 'CNPJ do cliente', example: '00.000.000/0001-00' })
    @IsString()
    @IsNotEmpty()
    nr_cnpj: string;

    @ApiProperty({ description: 'Inscrição estadual do cliente', example: '123456789' })
    @IsString()
    @IsNotEmpty()
    nr_inscricao_estadual: string;

    @ApiProperty({ description: 'Site do cliente', required: false, example: 'https://www.empresaabc.com.br' })
    @IsString()
    @IsOptional()
    ds_site?: string;

    @ApiProperty({ description: 'Endereço do cliente', example: 'Rua Exemplo' })
    @IsString()
    @IsNotEmpty()
    ds_endereco: string;

    @ApiProperty({ description: 'CEP do cliente', example: '00000-000' })
    @IsString()
    @IsNotEmpty()
    ds_cep: string;

    @ApiProperty({ description: 'UF do cliente', example: 'SP' })
    @IsString()
    @IsNotEmpty()
    ds_uf: string;

    @ApiProperty({ description: 'Cidade do cliente', example: 'São Paulo' })
    @IsString()
    @IsNotEmpty()
    ds_cidade: string;

    @ApiProperty({ description: 'Bairro do cliente', example: 'Centro' })
    @IsString()
    @IsNotEmpty()
    ds_bairro: string;

    @ApiProperty({ description: 'Número do endereço', example: '123' })
    @IsString()
    @IsNotEmpty()
    nr_numero: string;

    @ApiProperty({ description: 'Complemento do endereço', required: false, example: 'Sala 45' })
    @IsString()
    @IsOptional()
    ds_complemento?: string;

    @ApiProperty({ description: 'Código IBGE', required: false, example: '3550308' })
    @IsString()
    @IsOptional()
    nr_codigo_ibge?: string;

    @ApiProperty({ description: 'Latitude', required: false, example: -23.5505 })
    @IsNumber()
    @IsOptional()
    nr_latitude?: number;

    @ApiProperty({ description: 'Longitude', required: false, example: -46.6333 })
    @IsNumber()
    @IsOptional()
    nr_longitude?: number;

    @ApiProperty({ description: 'Distância em km', required: false, example: 15.5 })
    @IsNumber()
    @IsOptional()
    nr_distancia_km?: number;

    @ApiProperty({ description: 'Observação de identificação', required: false })
    @IsString()
    @IsOptional()
    tx_observacao_ident?: string;

    @ApiProperty({ description: 'Indicador se é matriz', example: true })
    @IsBoolean()
    @IsNotEmpty()
    fl_matriz: boolean;

    @ApiProperty({ description: 'Situação do cliente', example: 'Ativo' })
    @IsString()
    @IsNotEmpty()
    ds_situacao: string;

    @ApiProperty({ description: 'Sistema utilizado pelo cliente', example: 'ERP' })
    @IsString()
    @IsNotEmpty()
    ds_sistema: string;

    @ApiProperty({ description: 'Tipo de contrato', example: 'Mensal' })
    @IsString()
    @IsNotEmpty()
    ds_contrato: string;

    @ApiProperty({ description: 'Número de nomeados', example: 5 })
    @IsNumber()
    @IsNotEmpty()
    nr_nomeados: number;

    @ApiProperty({ description: 'Número de simultâneos', example: 3 })
    @IsNumber()
    @IsNotEmpty()
    nr_simultaneos: number;

    @ApiProperty({ description: 'Número de técnicas remotas', required: false, example: 2 })
    @IsNumber()
    @IsOptional()
    nr_tecnica_remoto?: number;

    @ApiProperty({ description: 'Número de técnicas presenciais', required: false, example: 1 })
    @IsNumber()
    @IsOptional()
    nr_tecnica_presencial?: number;

    @ApiProperty({ description: 'Mínimo de horas', example: '04:00:00' })
    @IsNotEmpty()
    tm_minimo_horas: Date;

    @ApiProperty({ description: 'Indicador de diário de viagem', example: 'Sim' })
    @IsString()
    @IsNotEmpty()
    ds_diario_viagem: string;

    @ApiProperty({ description: 'Região do cliente', example: 'Sudeste' })
    @IsString()
    @IsNotEmpty()
    ds_regiao: string;

    @ApiProperty({ description: 'Observação do contrato' })
    @IsString()
    @IsNotEmpty()
    tx_observacao_contrato: string;

    @ApiProperty({ description: 'Código ZZ', example: 12345 })
    @IsNumber()
    @IsNotEmpty()
    nr_codigo_zz: number;

    @ApiProperty({ description: 'Franquia de NF', example: 10 })
    @IsNumber()
    @IsNotEmpty()
    nr_franquia_nf: number;

    @ApiProperty({ description: 'Quantidade de documentos', example: 100 })
    @IsNumber()
    @IsNotEmpty()
    nr_qtde_documentos: number;

    @ApiProperty({ description: 'Valor da franquia', example: 1000.0 })
    @IsNumber()
    @IsNotEmpty()
    nr_valor_franqia: number;

    @ApiProperty({ description: 'Valor excedente', example: 100.0 })
    @IsNumber()
    @IsNotEmpty()
    nr_valor_excendente: number;

    @ApiProperty({ description: 'Data do contrato', example: '2025-01-01T00:00:00.000Z' })
    @IsDate()
    @IsNotEmpty()
    dt_data_contrato: Date;
}
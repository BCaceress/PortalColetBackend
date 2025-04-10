import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateClienteDto {
    @IsBoolean()
    @IsNotEmpty()
    fl_ativo: boolean;

    @IsString()
    @IsNotEmpty()
    ds_nome: string;

    @IsString()
    @IsNotEmpty()
    ds_razao_social: string;

    @IsString()
    @IsNotEmpty()
    nr_cnpj: string;

    @IsString()
    @IsNotEmpty()
    nr_inscricao_estadual: string;

    @IsString()
    @IsOptional()
    ds_site?: string;

    @IsString()
    @IsNotEmpty()
    ds_endereco: string;

    @IsString()
    @IsNotEmpty()
    ds_cep: string;

    @IsString()
    @IsNotEmpty()
    ds_uf: string;

    @IsString()
    @IsNotEmpty()
    ds_cidade: string;

    @IsString()
    @IsNotEmpty()
    ds_bairro: string;

    @IsString()
    @IsNotEmpty()
    nr_numero: string;

    @IsString()
    @IsOptional()
    ds_complemento?: string;

    @IsString()
    @IsOptional()
    nr_codigo_ibge?: string;

    @IsNumber()
    @IsOptional()
    nr_latitude?: number;

    @IsNumber()
    @IsOptional()
    nr_longitude?: number;

    @IsNumber()
    @IsOptional()
    nr_distancia_km?: number;

    @IsString()
    @IsOptional()
    tx_observacao_ident?: string;

    @IsBoolean()
    @IsNotEmpty()
    fl_matriz: boolean;

    @IsString()
    @IsNotEmpty()
    ds_situacao: string;

    @IsString()
    @IsNotEmpty()
    ds_sistema: string;

    @IsString()
    @IsNotEmpty()
    ds_contrato: string;

    @IsNumber()
    @IsNotEmpty()
    nr_nomeados: number;

    @IsNumber()
    @IsNotEmpty()
    nr_simultaneos: number;

    @IsNumber()
    @IsOptional()
    nr_tecnica_remoto?: number;

    @IsNumber()
    @IsOptional()
    nr_tecnica_presencial?: number;

    @IsNotEmpty()
    tm_minimo_horas: Date;

    @IsString()
    @IsNotEmpty()
    ds_diario_viagem: string;

    @IsString()
    @IsNotEmpty()
    ds_regiao: string;

    @IsString()
    @IsNotEmpty()
    tx_observacao_contrato: string;

    @IsNumber()
    @IsNotEmpty()
    nr_codigo_zz: number;

    @IsNumber()
    @IsNotEmpty()
    nr_franquia_nf: number;

    @IsNumber()
    @IsNotEmpty()
    nr_qtde_documentos: number;

    @IsNumber()
    @IsNotEmpty()
    nr_valor_franqia: number;

    @IsNumber()
    @IsNotEmpty()
    nr_valor_excendente: number;

    @IsDate()
    @IsNotEmpty()
    dt_data_contrato: Date;
}
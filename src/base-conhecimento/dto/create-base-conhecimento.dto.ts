import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

// Define the enums locally to match the schema
enum CategoriaBaseConhecimento {
    Manual = 'Manual',
    Tutorial = 'Tutorial',
    Documento = 'Documento',
    Treinamento = 'Treinamento'
}

enum TipoBaseConhecimento {
    Documento = 'Documento',
    Video = 'Video',
    Imagem = 'Imagem'
}

enum PermissaoBaseConhecimento {
    Todos = 'Todos',
    Administrador = 'Administrador',
    Implantador = 'Implantador',
    Suporte = 'Suporte',
    Analista = 'Analista',
    Desenvolvedor = 'Desenvolvedor'
}

export class CreateBaseConhecimentoDto {
    @ApiProperty({
        description: 'Categoria da base de conhecimento',
        enum: CategoriaBaseConhecimento,
        example: 'Manual'
    })
    @IsNotEmpty()
    @IsEnum(CategoriaBaseConhecimento)
    ds_categoria: CategoriaBaseConhecimento;

    @ApiProperty({
        description: 'Tipo da base de conhecimento',
        enum: TipoBaseConhecimento,
        example: 'Documento'
    })
    @IsNotEmpty()
    @IsEnum(TipoBaseConhecimento)
    ds_tipo: TipoBaseConhecimento;

    @ApiProperty({
        description: 'Permissão de acesso',
        enum: PermissaoBaseConhecimento,
        example: 'Todos'
    })
    @IsNotEmpty()
    @IsEnum(PermissaoBaseConhecimento)
    ds_permissao: PermissaoBaseConhecimento;

    @ApiProperty({ description: 'Título da base de conhecimento', example: 'Manual do Usuário v1.0' })
    @IsNotEmpty()
    @IsString()
    ds_titulo: string;

    @ApiProperty({ description: 'URL do conteúdo ou arquivo', required: false, example: 'https://storage.example.com/manuais/usuario-v1.pdf' })
    @IsOptional()
    @IsString()
    ds_url?: string;

    @ApiProperty({ description: 'Extensão do arquivo', required: false, example: 'pdf' })
    @IsOptional()
    @IsString()
    ds_extensao?: string;

    @ApiProperty({ description: 'Tamanho do arquivo em KB', required: false, example: 1024.5 })
    @IsOptional()
    @IsNumber()
    nr_tamanho_arquivo?: number;

    @ApiProperty({ description: 'Status ativo/inativo', default: true })
    @IsOptional()
    @IsBoolean()
    fl_ativo?: boolean;

    @ApiProperty({ description: 'ID do usuário que cadastrou a base de conhecimento', example: 1 })
    @IsNotEmpty()
    @IsInt()
    id_usuario: number;
}
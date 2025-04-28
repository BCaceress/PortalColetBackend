import { ApiProperty } from '@nestjs/swagger';

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

export class BaseConhecimento {
    @ApiProperty({ description: 'ID único da base de conhecimento' })
    id_base_conhecimento: number;

    @ApiProperty({
        description: 'Categoria da base de conhecimento',
        enum: CategoriaBaseConhecimento,
        example: 'Manual'
    })
    ds_categoria: CategoriaBaseConhecimento;

    @ApiProperty({
        description: 'Tipo da base de conhecimento',
        enum: TipoBaseConhecimento,
        example: 'Documento'
    })
    ds_tipo: TipoBaseConhecimento;

    @ApiProperty({
        description: 'Permissão de acesso',
        enum: PermissaoBaseConhecimento,
        example: 'Todos'
    })
    ds_permissao: PermissaoBaseConhecimento;

    @ApiProperty({ description: 'Título da base de conhecimento' })
    ds_titulo: string;

    @ApiProperty({ description: 'URL do conteúdo ou arquivo', required: false })
    ds_url?: string;

    @ApiProperty({ description: 'Número de visualizações', default: 0 })
    nr_visualizacoes: number;

    @ApiProperty({ description: 'Data de upload', default: 'now()' })
    dt_data_upload: Date;

    @ApiProperty({ description: 'Extensão do arquivo', required: false })
    ds_extensao?: string;

    @ApiProperty({ description: 'Tamanho do arquivo em KB', required: false })
    nr_tamanho_arquivo?: number;

    @ApiProperty({ description: 'Status ativo/inativo', default: true })
    fl_ativo: boolean;

    @ApiProperty({ description: 'ID do usuário que cadastrou a base de conhecimento' })
    id_usuario: number;
}
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BaseConhecimentoService } from './base-conhecimento.service';
import { CreateBaseConhecimentoDto } from './dto/create-base-conhecimento.dto';
import { UpdateBaseConhecimentoDto } from './dto/update-base-conhecimento.dto';
import { BaseConhecimento } from './entities/base-conhecimento.entity';

@ApiBearerAuth()
@ApiTags('Base de Conhecimento')
@UseGuards(JwtAuthGuard)
@Controller('base-conhecimento')
export class BaseConhecimentoController {
    constructor(private readonly baseConhecimentoService: BaseConhecimentoService) { }

    @Post()
    @ApiOperation({ summary: 'Criar uma nova base de conhecimento' })
    @ApiResponse({ status: 201, description: 'Base de conhecimento criada com sucesso', type: BaseConhecimento })
    @ApiResponse({ status: 400, description: 'Requisição inválida' })
    create(@Body() createBaseConhecimentoDto: CreateBaseConhecimentoDto) {
        return this.baseConhecimentoService.create(createBaseConhecimentoDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todas as bases de conhecimento' })
    @ApiResponse({ status: 200, description: 'Lista de bases de conhecimento retornada com sucesso', type: [BaseConhecimento] })
    findAll() {
        return this.baseConhecimentoService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter uma base de conhecimento pelo ID' })
    @ApiResponse({ status: 200, description: 'Base de conhecimento encontrada', type: BaseConhecimento })
    @ApiResponse({ status: 404, description: 'Base de conhecimento não encontrada' })
    findOne(@Param('id') id: string) {
        return this.baseConhecimentoService.findOne(+id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar uma base de conhecimento' })
    @ApiResponse({ status: 200, description: 'Base de conhecimento atualizada com sucesso', type: BaseConhecimento })
    @ApiResponse({ status: 404, description: 'Base de conhecimento não encontrada' })
    update(@Param('id') id: string, @Body() updateBaseConhecimentoDto: UpdateBaseConhecimentoDto) {
        return this.baseConhecimentoService.update(+id, updateBaseConhecimentoDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover uma base de conhecimento' })
    @ApiResponse({ status: 200, description: 'Base de conhecimento removida com sucesso' })
    @ApiResponse({ status: 404, description: 'Base de conhecimento não encontrada' })
    remove(@Param('id') id: string) {
        return this.baseConhecimentoService.remove(+id);
    }

    @Get('categoria/:categoria')
    @ApiOperation({ summary: 'Obter todas as bases de conhecimento de uma categoria' })
    @ApiResponse({ status: 200, description: 'Bases de conhecimento da categoria retornadas com sucesso', type: [BaseConhecimento] })
    findByCategoria(@Param('categoria') categoria: string) {
        return this.baseConhecimentoService.findByCategoria(categoria);
    }

    @Get('tipo/:tipo')
    @ApiOperation({ summary: 'Obter todas as bases de conhecimento de um tipo' })
    @ApiResponse({ status: 200, description: 'Bases de conhecimento do tipo retornadas com sucesso', type: [BaseConhecimento] })
    findByTipo(@Param('tipo') tipo: string) {
        return this.baseConhecimentoService.findByTipo(tipo);
    }

    @Get('permissao/:permissao')
    @ApiOperation({ summary: 'Obter todas as bases de conhecimento com uma permissão específica' })
    @ApiResponse({ status: 200, description: 'Bases de conhecimento com a permissão retornadas com sucesso', type: [BaseConhecimento] })
    findByPermissao(@Param('permissao') permissao: string) {
        return this.baseConhecimentoService.findByPermissao(permissao);
    }

    @Get('usuario/:id')
    @ApiOperation({ summary: 'Obter todas as bases de conhecimento de um usuário' })
    @ApiResponse({ status: 200, description: 'Bases de conhecimento do usuário retornadas com sucesso', type: [BaseConhecimento] })
    findByUsuario(@Param('id') id: string) {
        return this.baseConhecimentoService.findByUsuario(+id);
    }
}
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ContatosService } from './contatos.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { Contato } from './entities/contato.entity';

@ApiBearerAuth()
@ApiTags('Contatos')
@UseGuards(JwtAuthGuard)
@Controller('contatos')
export class ContatosController {
    constructor(private readonly contatosService: ContatosService) { }

    @Post()
    @ApiOperation({ summary: 'Criar um novo contato' })
    @ApiResponse({ status: 201, description: 'Contato criado com sucesso', type: Contato })
    @ApiResponse({ status: 400, description: 'Requisição inválida' })
    create(@Body() createContatoDto: CreateContatoDto) {
        return this.contatosService.create(createContatoDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os contatos' })
    @ApiResponse({ status: 200, description: 'Lista de contatos retornada com sucesso', type: [Contato] })
    findAll() {
        return this.contatosService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter um contato pelo ID' })
    @ApiResponse({ status: 200, description: 'Contato encontrado', type: Contato })
    @ApiResponse({ status: 404, description: 'Contato não encontrado' })
    findOne(@Param('id') id: string) {
        return this.contatosService.findOne(+id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar um contato' })
    @ApiResponse({ status: 200, description: 'Contato atualizado com sucesso', type: Contato })
    @ApiResponse({ status: 404, description: 'Contato não encontrado' })
    update(@Param('id') id: string, @Body() updateContatoDto: UpdateContatoDto) {
        return this.contatosService.update(+id, updateContatoDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover um contato' })
    @ApiResponse({ status: 200, description: 'Contato removido com sucesso' })
    @ApiResponse({ status: 404, description: 'Contato não encontrado' })
    remove(@Param('id') id: string) {
        return this.contatosService.remove(+id);
    }

    @Post(':id/clientes/:clienteId')
    @ApiOperation({ summary: 'Vincular um contato a um cliente' })
    @ApiResponse({ status: 201, description: 'Contato vinculado com sucesso' })
    @ApiResponse({ status: 404, description: 'Contato ou cliente não encontrado' })
    vinculateToClient(@Param('id') id: string, @Param('clienteId') clienteId: string) {
        return this.contatosService.vinculateToClient(+clienteId, +id);
    }

    @Delete(':id/clientes/:clienteId')
    @ApiOperation({ summary: 'Remover vínculo de um contato com um cliente' })
    @ApiResponse({ status: 200, description: 'Vínculo removido com sucesso' })
    @ApiResponse({ status: 404, description: 'Vínculo não encontrado' })
    removeFromClient(@Param('id') id: string, @Param('clienteId') clienteId: string) {
        return this.contatosService.removeFromClient(+clienteId, +id);
    }

    @Get('/cliente/:clienteId')
    @ApiOperation({ summary: 'Obter todos os contatos de um cliente' })
    @ApiResponse({ status: 200, description: 'Contatos do cliente retornados com sucesso', type: [Contato] })
    @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
    getClientContacts(@Param('clienteId') clienteId: string) {
        return this.contatosService.getClientContacts(+clienteId);
    }
}
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { CreateEmailClienteDto } from './dto/create-email-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { UpdateEmailClienteDto } from './dto/update-email-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@ApiBearerAuth()
@ApiTags('Clientes')
@UseGuards(JwtAuthGuard)
@Controller('clientes')
export class ClientesController {
    constructor(private readonly clientesService: ClientesService) { }

    @Post()
    @ApiOperation({ summary: 'Criar um novo cliente' })
    @ApiResponse({ status: 201, description: 'Cliente criado com sucesso', type: Cliente })
    @ApiResponse({ status: 400, description: 'Requisição inválida' })
    create(@Body() createClienteDto: CreateClienteDto) {
        return this.clientesService.create(createClienteDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os clientes' })
    @ApiResponse({ status: 200, description: 'Lista de clientes retornada com sucesso', type: [Cliente] })
    findAll() {
        return this.clientesService.findAll();
    }

    @Get('lista/ativos')
    @ApiOperation({ summary: 'Listar apenas os IDs e nomes dos clientes ativos' })
    @ApiResponse({ status: 200, description: 'Lista de clientes ativos retornada com sucesso' })
    findActiveList() {
        return this.clientesService.findActiveList();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter um cliente pelo ID' })
    @ApiResponse({ status: 200, description: 'Cliente encontrado', type: Cliente })
    @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
    findOne(@Param('id') id: string) {
        return this.clientesService.findOne(+id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar um cliente' })
    @ApiResponse({ status: 200, description: 'Cliente atualizado com sucesso', type: Cliente })
    @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
    update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
        return this.clientesService.update(+id, updateClienteDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover um cliente' })
    @ApiResponse({ status: 200, description: 'Cliente removido com sucesso' })
    @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
    remove(@Param('id') id: string) {
        return this.clientesService.remove(+id);
    }

    @Get(':id_cliente/emails')
    @ApiOperation({ summary: 'Listar todos os emails de um cliente específico' })
    @ApiResponse({ status: 200, description: 'Lista de emails retornada com sucesso' })
    @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
    getEmails(@Param('id_cliente') id_cliente: string) {
        return this.clientesService.getEmails(+id_cliente);
    }

    @Get('emails/:id')
    @ApiOperation({ summary: 'Obter um email específico pelo ID' })
    @ApiResponse({ status: 200, description: 'Email encontrado com sucesso' })
    @ApiResponse({ status: 404, description: 'Email não encontrado' })
    getEmailById(@Param('id') id: string) {
        return this.clientesService.getEmailById(+id);
    }

    @Post('emails')
    @ApiOperation({ summary: 'Adicionar um novo email para um cliente' })
    @ApiResponse({ status: 201, description: 'Email adicionado com sucesso' })
    @ApiResponse({ status: 400, description: 'Requisição inválida' })
    @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
    @ApiResponse({ status: 409, description: 'Email já existe para este cliente' })
    createEmail(@Body() createEmailClienteDto: CreateEmailClienteDto) {
        return this.clientesService.createEmail(createEmailClienteDto);
    }

    @Patch('emails/:id')
    @ApiOperation({ summary: 'Atualizar um email de cliente' })
    @ApiResponse({ status: 200, description: 'Email atualizado com sucesso' })
    @ApiResponse({ status: 404, description: 'Email não encontrado' })
    updateEmail(@Param('id') id: string, @Body() updateEmailClienteDto: UpdateEmailClienteDto) {
        return this.clientesService.updateEmail(+id, updateEmailClienteDto);
    }

    @Delete('emails/:id')
    @ApiOperation({ summary: 'Remover um email de cliente' })
    @ApiResponse({ status: 200, description: 'Email removido com sucesso' })
    @ApiResponse({ status: 404, description: 'Email não encontrado' })
    removeEmail(@Param('id') id: string) {
        return this.clientesService.removeEmail(+id);
    }
}
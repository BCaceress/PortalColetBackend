import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
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
}
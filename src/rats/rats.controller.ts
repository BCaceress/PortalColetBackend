import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateRatDto } from './dto/create-rat.dto';
import { UpdateRatDto } from './dto/update-rat.dto';
import { Rat } from './entities/rat.entity';
import { RatsService } from './rats.service';

@ApiBearerAuth()
@ApiTags('RATs')
@UseGuards(JwtAuthGuard)
@Controller('rats')
export class RatsController {
    constructor(private readonly ratsService: RatsService) { }

    @Post()
    @ApiOperation({ summary: 'Criar um novo RAT (Relatório de Atendimento Técnico)' })
    @ApiResponse({ status: 201, description: 'RAT criado com sucesso', type: Rat })
    @ApiResponse({ status: 400, description: 'Requisição inválida' })
    create(@Body() createRatDto: CreateRatDto) {
        return this.ratsService.create(createRatDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os RATs' })
    @ApiResponse({ status: 200, description: 'Lista de RATs retornada com sucesso', type: [Rat] })
    findAll() {
        return this.ratsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter um RAT pelo ID' })
    @ApiResponse({ status: 200, description: 'RAT encontrado', type: Rat })
    @ApiResponse({ status: 404, description: 'RAT não encontrado' })
    findOne(@Param('id') id: string) {
        return this.ratsService.findOne(+id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar um RAT' })
    @ApiResponse({ status: 200, description: 'RAT atualizado com sucesso', type: Rat })
    @ApiResponse({ status: 404, description: 'RAT não encontrado' })
    update(@Param('id') id: string, @Body() updateRatDto: UpdateRatDto) {
        return this.ratsService.update(+id, updateRatDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover um RAT' })
    @ApiResponse({ status: 200, description: 'RAT removido com sucesso' })
    @ApiResponse({ status: 404, description: 'RAT não encontrado' })
    remove(@Param('id') id: string) {
        return this.ratsService.remove(+id);
    }

    @Get('/usuario/:id')
    @ApiOperation({ summary: 'Obter todos os RATs de um usuário' })
    @ApiResponse({ status: 200, description: 'RATs do usuário retornados com sucesso', type: [Rat] })
    findByUsuario(@Param('id') id: string) {
        return this.ratsService.findByUsuario(+id);
    }

    @Get('/cliente/:id')
    @ApiOperation({ summary: 'Obter todos os RATs de um cliente' })
    @ApiResponse({ status: 200, description: 'RATs do cliente retornados com sucesso', type: [Rat] })
    findByCliente(@Param('id') id: string) {
        return this.ratsService.findByCliente(+id);
    }

    @Get('/contato/:id')
    @ApiOperation({ summary: 'Obter todos os RATs de um contato' })
    @ApiResponse({ status: 200, description: 'RATs do contato retornados com sucesso', type: [Rat] })
    findByContato(@Param('id') id: string) {
        return this.ratsService.findByContato(+id);
    }
}
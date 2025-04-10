import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ContatosService } from './contatos.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@UseGuards(JwtAuthGuard)
@Controller('contatos')
export class ContatosController {
    constructor(private readonly contatosService: ContatosService) { }

    @Post()
    create(@Body() createContatoDto: CreateContatoDto) {
        return this.contatosService.create(createContatoDto);
    }

    @Get()
    findAll() {
        return this.contatosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.contatosService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateContatoDto: UpdateContatoDto) {
        return this.contatosService.update(+id, updateContatoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.contatosService.remove(+id);
    }

    @Post(':id/clientes/:clienteId')
    vinculateToClient(@Param('id') id: string, @Param('clienteId') clienteId: string) {
        return this.contatosService.vinculateToClient(+clienteId, +id);
    }

    @Delete(':id/clientes/:clienteId')
    removeFromClient(@Param('id') id: string, @Param('clienteId') clienteId: string) {
        return this.contatosService.removeFromClient(+clienteId, +id);
    }

    @Get('/cliente/:clienteId')
    getClientContacts(@Param('clienteId') clienteId: string) {
        return this.contatosService.getClientContacts(+clienteId);
    }
}
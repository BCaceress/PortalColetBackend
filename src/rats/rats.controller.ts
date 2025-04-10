import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateRatDto } from './dto/create-rat.dto';
import { UpdateRatDto } from './dto/update-rat.dto';
import { RatsService } from './rats.service';

@UseGuards(JwtAuthGuard)
@Controller('rats')
export class RatsController {
    constructor(private readonly ratsService: RatsService) { }

    @Post()
    create(@Body() createRatDto: CreateRatDto) {
        return this.ratsService.create(createRatDto);
    }

    @Get()
    findAll() {
        return this.ratsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ratsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRatDto: UpdateRatDto) {
        return this.ratsService.update(+id, updateRatDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ratsService.remove(+id);
    }

    @Get('/usuario/:id')
    findByUsuario(@Param('id') id: string) {
        return this.ratsService.findByUsuario(+id);
    }

    @Get('/cliente/:id')
    findByCliente(@Param('id') id: string) {
        return this.ratsService.findByCliente(+id);
    }

    @Get('/contato/:id')
    findByContato(@Param('id') id: string) {
        return this.ratsService.findByContato(+id);
    }
}
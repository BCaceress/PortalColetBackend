import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @ApiOperation({ summary: 'Autenticação de usuário' })
    @ApiResponse({
        status: 200,
        description: 'Usuário autenticado com sucesso',
        schema: {
            properties: {
                access_token: { type: 'string' },
                usuario: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        nome: { type: 'string' },
                        email: { type: 'string' },
                        funcao: { type: 'string' },
                    },
                },
            },
        },
    })
    @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
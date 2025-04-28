import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNotEmpty } from 'class-validator';

export class RelatorioDeslocamentoDto {
    @ApiProperty({
        description: 'ID do usuário',
        example: 1
    })
    @IsInt()
    @IsNotEmpty()
    id_usuario: number;

    @ApiProperty({
        description: 'Data e hora de entrada (início do período)',
        example: '2025-04-15T00:00:00.000Z'
    })
    @IsDateString()
    @IsNotEmpty()
    dt_data_hora_entrada: string;

    @ApiProperty({
        description: 'Data e hora de saída (fim do período)',
        example: '2025-04-30T23:59:59.999Z'
    })
    @IsDateString()
    @IsNotEmpty()
    dt_data_hora_saida: string;
}
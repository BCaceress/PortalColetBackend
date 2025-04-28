import { PartialType } from '@nestjs/swagger';
import { CreateBaseConhecimentoDto } from './create-base-conhecimento.dto';

export class UpdateBaseConhecimentoDto extends PartialType(CreateBaseConhecimentoDto) { }
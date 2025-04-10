import { PartialType } from '@nestjs/swagger';
import { CreateRatDto } from './create-rat.dto';

export class UpdateRatDto extends PartialType(CreateRatDto) { }
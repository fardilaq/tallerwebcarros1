import { PartialType } from '@nestjs/mapped-types';
import { CreateDealershipDto } from './create-dealership.dto.js';

export class UpdateDealershipDto extends PartialType(CreateDealershipDto) {}

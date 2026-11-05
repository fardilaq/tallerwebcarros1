import { CarStatus } from "../entities/car.entity.js";
import {IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional,IsString, Max, MaxLength, Min,} from 'class-validator';

export class CreateCarDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    plate: string;

    @IsString()
    @IsNotEmpty()
    brand: string;

    @IsString()
    @IsNotEmpty()
    model: string;

    @IsInt()
    @Min(1890)
    @Max(2027)
    year: number;
    
    @IsInt()
    @Min(0)
    price: number;

    @IsEnum(CarStatus)
    status: CarStatus;

    @IsInt()
    dealership_id: number;
}

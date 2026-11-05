import { IsBoolean, IsDate } from "class-validator";
import { IsString } from "class-validator/types/decorator/typechecker/IsString.js";

export class CreateDealershipDto {
    @IsString()
    name: string;

    @IsString()
    city: string;

    @IsBoolean()
    active: boolean;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;
}

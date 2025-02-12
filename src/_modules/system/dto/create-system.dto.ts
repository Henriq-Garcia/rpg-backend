import { IsString, IsUrl } from "class-validator";

export class CreateSystemDto {
    @IsString()
    name: string;

    @IsString()
    @IsUrl()
    ruleBook: string;
}
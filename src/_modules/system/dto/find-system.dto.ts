import { IsInt, IsString } from "class-validator";

export class FindSystemDto {
    @IsInt()
    id?: number;

    @IsString()
    name?: string;
}
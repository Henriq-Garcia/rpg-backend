import { IsEmail, IsInt, IsString } from "class-validator";

export class FindUserDto {
    @IsString()
    @IsEmail()
    email?: string;

    @IsInt()
    id?: number;
}
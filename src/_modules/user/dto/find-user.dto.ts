import { IsEmail, IsInt, IsString } from "class-validator";

export class FindUserDto {
    @IsInt()
    id?: number;

    @IsString()
    @IsEmail()
    email?: string;
}

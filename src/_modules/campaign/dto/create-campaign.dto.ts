import { IsBoolean, IsInt, IsString, MinLength } from "class-validator";

export class CreateCampaignDto {
    @IsString()
    @MinLength(5)
    name: string;

    @IsInt()
    systemId: number;

    @IsInt()
    createdById: number;

    @IsBoolean()
    active: boolean;

    @IsBoolean()
    public: boolean;
}
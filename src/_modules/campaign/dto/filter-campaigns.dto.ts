import { Transform } from "class-transformer";
import { IsBoolean, IsIn, IsInt, IsOptional } from "class-validator";

export class FilterCampaignDto {
    @IsOptional()
    @IsInt()
    @Transform(({value}) => parseInt(value))
    createdById?: number;

    @IsOptional()
    @IsBoolean()
    @Transform(({value}) => value === 'true' || value === true)
    active?: boolean;

    @IsOptional()
    @IsBoolean()
    @Transform(({value}) => value === 'true' || value === true)
    public?: boolean

    @IsOptional()
    @IsIn(['name', 'active', 'id', 'public'])
    orderBy?: 'name' | 'active' | 'id' | 'public';

    @IsOptional()
    @IsIn(['asc', 'desc'])
    order?: 'asc' | 'desc'
}
import { IsInt } from "class-validator";

export class GetCampaignDto {
    @IsInt()
    id: number;
}
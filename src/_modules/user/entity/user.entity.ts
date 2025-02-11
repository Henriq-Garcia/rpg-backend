import { CampaignEntity } from "src/_modules/campaign/entity/campaign.entity";

export class UserEntity {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    createdCampaigns?: CampaignEntity[];
    subscribedCampaigns?: CampaignEntity[]
    ownedProps?: any[];
    sessionsParticipate?: any[]
}
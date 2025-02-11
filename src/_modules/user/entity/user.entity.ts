import { CampaignEntity } from "src/_modules/campaign/entity/campaign.entity";
import { PropEntity } from "../../props/entity/prop.entity";

export class UserEntity {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    createdCampaigns?: CampaignEntity[];
    subscribedCampaigns?: CampaignEntity[]
    ownedProps?: PropEntity[];
    sessionsParticipate?: any[]
}
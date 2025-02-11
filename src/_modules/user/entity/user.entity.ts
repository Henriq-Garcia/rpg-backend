export class UserEntity {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    createdCampaigns?: any[];
    subscribedCampaigns?: any[]
    ownedProps?: any[];
    sessionsParticipate?: any[]
}
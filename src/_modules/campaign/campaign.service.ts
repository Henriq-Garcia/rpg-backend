import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { CampaignEntity } from './entity/campaign.entity';
import { FilterCampaignDto } from './dto/filter-campaigns.dto';

@Injectable()
export class CampaignService {

    constructor(private prisma: PrismaService) {}

    async createCampaign(data: CreateCampaignDto): Promise<CampaignEntity> {
        const createdCampaign = await this.prisma.campaign.create({ data });
        const { updatedAt, ...campaign  } = createdCampaign;
        return campaign;
    }

    async listCampaigns(filter: FilterCampaignDto): Promise<CampaignEntity[]> {
        const { active, createdById, order = 'asc', orderBy } = filter;

        const orderConfig = orderBy
            ? { [orderBy]: order }
            : undefined;

        const campaigns = await this.prisma.campaign.findMany({
            orderBy: orderConfig,
            where: {
                active: active !== undefined ? active : undefined,
                createdById: createdById !== undefined ? createdById : undefined,
                public: filter.public !== undefined ? filter.public : undefined
            }
        });

        return campaigns.map((campaign) => ({
            active: campaign.active,
            createdAt: campaign.createdAt,
            createdById: campaign.createdById,
            id: campaign.id,
            name: campaign.name,
            public: campaign.public,
            systemId: campaign.systemId
        }))
    }
}

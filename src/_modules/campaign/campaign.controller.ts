import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { CampaignService } from './campaign.service';
import { GetCampaignDto } from './dto/get-campaign.dto';

@Controller('campaign')
export class CampaignController {

    constructor(private campaignService: CampaignService) {}

    @Post()
    async createCampaign(@Body() data: CreateCampaignDto) {
        return await this.campaignService.createCampaign(data);
    }

    @Get()
    async getCampaign(@Query() where: GetCampaignDto) {
        return await this.campaignService.getCampaign(where)
    }
}

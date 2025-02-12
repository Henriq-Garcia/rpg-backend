import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { DatabaseModule } from '../database/database.module';
import { InviteService } from 'src/_common/invite.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CampaignController],
  providers: [CampaignService, InviteService]
})
export class CampaignModule {}

import { Module } from '@nestjs/common';
import { DatabaseModule } from './_modules/database/database.module';
import { UserModule } from './_modules/user/user.module';
import { CampaignModule } from './_modules/campaign/campaign.module';

@Module({
  imports: [DatabaseModule, UserModule, CampaignModule]
})
export class AppModule {}

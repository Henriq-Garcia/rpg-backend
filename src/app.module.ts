import { Module } from '@nestjs/common';
import { DatabaseModule } from './_modules/database/database.module';
import { UserModule } from './_modules/user/user.module';
import { CampaignModule } from './_modules/campaign/campaign.module';
import { SystemModule } from './_modules/system/system.module';

@Module({
  imports: [DatabaseModule, UserModule, CampaignModule, SystemModule]
})
export class AppModule {}

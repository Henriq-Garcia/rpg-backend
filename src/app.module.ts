import { Module } from '@nestjs/common';
import { DatabaseModule } from './_modules/database/database.module';
import { UserModule } from './_modules/user/user.module';

@Module({
  imports: [DatabaseModule, UserModule]
})
export class AppModule {}

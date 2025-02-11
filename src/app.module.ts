import { Module } from '@nestjs/common';
import { DatabaseModule } from './_modules/database/database.module';

@Module({
  imports: [DatabaseModule]
})
export class AppModule {}

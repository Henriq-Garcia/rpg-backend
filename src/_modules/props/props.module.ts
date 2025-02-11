import { Module } from '@nestjs/common';
import { PropsService } from './props.service';

@Module({
  providers: [PropsService]
})
export class PropsModule {}

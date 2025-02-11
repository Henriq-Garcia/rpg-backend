import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HashPassword } from 'src/_pipes/hash.pipe';

@Module({
    imports: [DatabaseModule],
    providers: [UserService, HashPassword],
    controllers: [UserController]
})
export class UserModule {}

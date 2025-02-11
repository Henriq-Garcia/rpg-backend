import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {

    constructor (private prisma: PrismaService) {};

    async createUser(data: CreateUserDto) {
        return this.prisma.user.create({ data });
    }

    async findUser(data: FindUserDto): Promise<UserEntity> {
        const where = data.id ? { id: data.id } : { email: data.email! };
        const userResponse = await this.prisma.user.findUnique({ where });
        if (!userResponse) throw new NotFoundException('User not found');
        const { password, ...user } = userResponse;
        return user;
    }
}

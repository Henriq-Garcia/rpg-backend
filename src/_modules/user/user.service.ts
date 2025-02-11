import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {

    constructor (private prisma: PrismaService) {};

    async createUser(data: CreateUserDto): Promise<UserEntity> {
        try {
            const userCreateResponse = await this.prisma.user.create({ data });
            const { password, ...user } = userCreateResponse;
            return user;
        } catch (error) {
            throw new InternalServerErrorException('Error creating user');
        }
    }

    async findUser(data: FindUserDto): Promise<UserEntity> {
        try {
            const where = data.id ? { id: data.id } : data.email ? { email: data.email } : null;
            if (!where) throw new NotFoundException('Invalid search parameters');

            const userResponse = await this.prisma.user.findUnique({ where });
            if (!userResponse) throw new NotFoundException('User not found');

            const { password, ...user } = userResponse;
            return user;
        } catch (error) {
            throw new InternalServerErrorException('Error retrieving user');
        }
    }
}

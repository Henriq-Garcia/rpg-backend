import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./entity/user.entity";
import { FindUserDto } from "./dto/find-user.dto";

@Injectable()
export class UserService {

    constructor (private prisma: PrismaService) {}

    async createUser(data: CreateUserDto): Promise<UserEntity> {
        const userCreate = await this.prisma.user.create({ data });
        return {
            id: userCreate.id,
            email: userCreate.email,
            name: userCreate.name
        }
    }

    async findUser(param: FindUserDto): Promise<UserEntity> {
        const where = param.id ? { id: param.id } : param.email ? { email: param.email } : null;
        if (!where) throw new BadRequestException('Invalid params');

        const userResult = await this.prisma.user.findUnique({ where });
        
        if (!userResult) throw new NotFoundException('User not found');
        const { password, createdAt, updatedAt, ...user } = userResult;
        return user;
    }
}
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateSystemDto } from './dto/create-system.dto';
import { SystemEntity } from './entity/system.entity';
import { FindSystemDto } from './dto/find-system.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class SystemService {

    constructor(private prisma: PrismaService) {}

    async createSystem(data: CreateSystemDto): Promise<SystemEntity> {
        const systemCreateResult = await this.prisma.system.create({ data });
        const { createdAt, ...system } = systemCreateResult;
        return system;
    }

    async listSystems(): Promise<SystemEntity[]> {
        const result = await this.prisma.system.findMany();
        return result.map((system) => ({
            id: system.id,
            name: system.name,
            ruleBook: system.ruleBook,
            updatedAt: system.updatedAt
        }));
    }

    async getSystem(param: FindSystemDto) {
        const where = param.id ? { id: param.id } : param.name ? { name: { contains: param.name, mode: Prisma.QueryMode.insensitive } } : null;
        if (!where) throw new BadRequestException('Invalid params');

        const result = await this.prisma.system.findFirst({ where });

        if (!result) throw new NotFoundException('User not found');
        const { createdAt, ...system } = result;
        return system;
    }
}

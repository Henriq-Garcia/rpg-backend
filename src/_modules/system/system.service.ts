import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateSystemDto } from './dto/create-system.dto';
import { SystemEntity } from './entity/system.entity';

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
}

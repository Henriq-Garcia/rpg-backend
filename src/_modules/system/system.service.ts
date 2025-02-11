import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateSystemDto } from './dto/create-system.dto';
import { SystemEntity } from './entity/system.entity';

@Injectable()
export class SystemService {

    constructor(private prisma: PrismaService) {}

    async createSystem(data: CreateSystemDto): Promise<SystemEntity> {
        try {
            const systemCreateResponse = await this.prisma.system.create({ data });
            return {
                id: systemCreateResponse.id,
                name: systemCreateResponse.name,
                ruleBook: systemCreateResponse.ruleBook
            };
        } catch (error) {
            throw new InternalServerErrorException('Error creating system');
        }
    }

    async listSystems(): Promise<SystemEntity[]> {
        try {
            const systemsResponse = await this.prisma.system.findMany();
            return systemsResponse.map(({ id, name, ruleBook }) => ({
                id,
                name,
                ruleBook
            }));
        } catch (error) {
            throw new InternalServerErrorException('Error fetching systems');
        }
    }

    async getSystem(id: number): Promise<SystemEntity> {
        try {
            const systemResponse = await this.prisma.system.findUnique({ where: { id } });
            if (!systemResponse) throw new NotFoundException('System not found');

            return {
                id: systemResponse.id,
                name: systemResponse.name,
                ruleBook: systemResponse.ruleBook
            };
        } catch (error) {
            throw new InternalServerErrorException('Error retrieving system');
        }
    }

}

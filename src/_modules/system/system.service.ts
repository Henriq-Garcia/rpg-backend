import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateSystemDto } from './dto/create-system.dto';

@Injectable()
export class SystemService {

    constructor(private prisma: PrismaService) {}

    async createSystem(data: CreateSystemDto) {
        const systemCreateResult = await this.prisma.system.create({ data });
        const { createdAt, ...system } = systemCreateResult;
        return system;
    }
}

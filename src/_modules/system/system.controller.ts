import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SystemService } from './system.service';
import { CreateSystemDto } from './dto/create-system.dto';
import { FindSystemDto } from './dto/find-system.dto';

@Controller('system')
export class SystemController {

    constructor (private systemService: SystemService) {}

    @Post()
    async createSystem(@Body() data: CreateSystemDto) {
        return await this.systemService.createSystem(data);
    }

    @Get()
    async getSystem(
        @Query('name') name?: string,
        @Query('id') id?: string
    ) {
        const systemId = id ? parseInt(id, 10) : undefined
        return await this.systemService.getSystem({ id: systemId, name });
    }

    @Get('list')
    async listSystems() {
        return await this.systemService.listSystems();
    }
}

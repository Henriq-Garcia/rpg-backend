import { Body, Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { HashPassword } from 'src/_pipes/hash.pipe';
import { UserService } from './user.service';
import { FindUserDto } from './dto/find-user.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Post()
    async createUser(@Body() userData: CreateUserDto, @Body('password', HashPassword) hashedPassword: string) {
        userData.password = hashedPassword;
        return await this.userService.createUser(userData);
    }

    @Get()
    async findUser(@Query('id', ParseIntPipe) id: number, @Query('email') email: string) {
        return await this.userService.findUser({ id, email });
    }
}

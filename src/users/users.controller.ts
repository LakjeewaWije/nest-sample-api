import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { Response } from 'express';
import { LoginUserDto } from './dto/user-login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post()
    async create(@Body() loginUserDto: LoginUserDto) {
        return 'This action log in the user '+loginUserDto.name;
    }

    @Get('/single')
    getSingleUser(@Res() res: Response) {

        var user = this.userService.getSingleUser();

        var newUser: User = {
            name: user,
            age: 20
        }
        res.status(HttpStatus.OK).json({ data: newUser });
    }
}

import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UseFilters,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { Response } from 'express';
import { LoginUserDto } from './dto/user-login.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async logginUser(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    // return 'This action log in the user ' + loginUserDto.name;
    res
      .status(HttpStatus.OK)
      .json({ data: 'This action log in the user ' + loginUserDto.name });
  }

  //   @UseGuards(AuthGuard)
  @Get('/single')
  getSingleUser(@Res() res: Response) {
    var user = this.userService.getSingleUser();

    var newUser: User = {
      name: user,
      age: 20,
    };
    res.status(HttpStatus.OK).json({ data: newUser });
  }

  @Get('/all')
  getAll(@Res() res: Response) {
    throw new BadRequestException('Something bad happened');
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return 1;
  }
}

import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/users/dto/user-login.dto';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  async logginUser(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    // return 'This action log in the user ' + loginUserDto.name;

    var val = await this.authService.signInUser();
    console.log('val 0', val);

    res.status(HttpStatus.OK).json({ data: val });
  }
}

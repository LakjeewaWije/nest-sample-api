import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async signInUser(): Promise<string> {
    const payload = { name: 'wije' };
    return await this.jwtService.signAsync(payload);
  }
}

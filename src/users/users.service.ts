import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getSingleUser(): string {
    return 'Wije';
  }
}

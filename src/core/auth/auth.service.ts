import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { Users } from '../../entity/users/user.entity';
import { UserService } from '../../feature/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService) private readonly userService: UserService,
    @Inject(JwtService) private readonly jwtService: JwtService,
  ) {}

  async createToken(payload: { account_name: string }): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async validateUser(payload: { account: string }): Promise<Users> {
    return await this.userService.findOneByAccount(payload.account);
  }
}

import { Body, Controller, Post, Inject, HttpCode } from '@nestjs/common';
import { Result } from '../../common/interface/result.interface';
import { UserService } from './user.service';
import { AuthService } from '../../core/auth/auth.service';
import { UserLoginDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserService) private readonly userService: UserService,
    @Inject(AuthService) private readonly authService: AuthService,
  ) {}

  /**
   * 用户登录成功后，返回的 data 是授权令牌；
   * 在调用有 @UseGuards(AuthGuard()) 注解的路由时，会检查当前请求头中是否包含 Authorization: Bearer xxx 授权令牌，
   * 其中 Authorization 是用于告诉服务端本次请求有令牌，并且令牌前缀是 Bearer，而令牌的具体内容是登录之后返回的 data(accessToken)。
   */
  @Post('login')
  @HttpCode(200)
  async login(@Body() userLoginDto: UserLoginDto): Promise<Result> {
    await this.userService.login(userLoginDto.username, userLoginDto.password);
    const accessToken = await this.authService.createToken({
      account_name: userLoginDto.username,
    });
    return { code: 200, message: '登录成功', data: accessToken };
  }
}

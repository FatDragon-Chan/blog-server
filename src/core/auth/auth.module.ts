import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from '../../feature/user/user.module';
import { AuthService } from './auth.service';
import { AuthStrategy } from './auth.strategy';

@Module({
  imports: [
    JwtModule.register({
      // 向 nest 容器注册 jwt 模块，并配置密钥和令牌有效期
      secret: '*7&3127daqD1.d913',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    forwardRef(() => UserModule), // 处理模块间的循环依赖
  ],
  providers: [AuthService, AuthStrategy],
  exports: [AuthService], // 导出 AuthService 供 ArticleModule 使用
})
export class AuthModule {}

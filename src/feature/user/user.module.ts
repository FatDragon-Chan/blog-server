import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../../entity/users/user.entity';

import { AuthModule } from '../../core/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    forwardRef(() => AuthModule), // 处理模块间的循环依赖
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

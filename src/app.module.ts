import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './feature/user/user.module';
import { BookModule } from './feature/book/book.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, BookModule],
})
export class AppModule {}

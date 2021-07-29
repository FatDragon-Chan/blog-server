import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './feature/user/user.module';
import { ArticleModule } from './feature/article/article.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, ArticleModule],
})
export class AppModule {}

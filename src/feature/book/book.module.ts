// import { Module, forwardRef } from '@nestjs/common';
// import { BookController } from './book.controller';
// import { BookService } from './book.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Books } from '../../entity/book/book.entity';
// import { AuthModule } from '../../core/auth/auth.module';
// import { HttpModule } from '@nestjs/axios';
//
// @Module({
//   imports: [
//     TypeOrmModule.forFeature([Books]),
//     forwardRef(() => AuthModule), // 处理模块间的循环依赖
//     HttpModule,
//   ],
//   providers: [BookService],
//   controllers: [BookController],
//   exports: [BookService],
// })
// export class BookModule {}

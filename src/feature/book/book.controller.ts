// import { Body, Controller, Post, Inject, HttpCode } from '@nestjs/common';
// import { Result } from '../../common/interface/result.interface';
// import { BookService } from './book.service';
// import { AuthService } from '../../core/auth/auth.service';
// import { BookDetailDto } from './book.dto';
//
// @Controller('book')
// export class BookController {
//   constructor(
//     @Inject(BookService) private readonly bookService: BookService,
//     @Inject(AuthService) private readonly authService: AuthService,
//   ) {}
//
//   /**
//    * 通过书籍号查询书籍详情
//    */
//   @Post('detail')
//   @HttpCode(200)
//   async login(@Body() bookDetailDto: BookDetailDto): Promise<Result> {
//     const bookDetail = await this.bookService.getBookDetail({
//       isbn: bookDetailDto.isbn,
//     });
//
//     return { code: 200, message: '登录成功', data: bookDetail };
//   }
// }

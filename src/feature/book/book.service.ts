import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { Books } from '../../entity/book/book.entity';
import { map } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class BookService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Books) private readonly bookRepo: Repository<Books>,
  ) {}

  /**
   * 新增书籍
   */

  /**
   * 通过isbn号获取书籍详情
   */
  async getBookDetail({ isbn }) {
    let book = await this.findLocalBookByIsbn(isbn);
    if (!book) {
      await this.findRemoteBookByIsbn(isbn);
    }
    book = await this.findLocalBookByIsbn(isbn);
    return book;
  }

  /**
   * 查找数据库中是否缓存
   */
  async findLocalBookByIsbn(isbn: string): Promise<Books> {
    return await this.bookRepo.findOne({ isbn });
  }
  /**
   * 远程获取
   */
  async findRemoteBookByIsbn(isbn: string) {
    const book = await this.remoteBookByZhuJian(isbn);
    // await this.mapBookEntity(book);
  }
  /**
   * 远程api获取
   */
  async remoteBookByZhuJian(isbn: string) {
    const { data } = await lastValueFrom(
      this.httpService
        .get(`https://api.feelyou.top/isbn/${isbn}`, {
          headers: { apikey: 'OWHagO3Wmkt0FLaZJTtgHxCzGDxHt0Uu' },
        })
        .pipe(
          map((response) => {
            return response;
          }),
        ),
    );
    if (data.message) {
      throw new HttpException(data.message, 409);
    }
    return data;
  }
  /**
   * 过滤并映射字段
   */
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ArticlesEntity } from '../../entity/article/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticlesEntity)
    private readonly articleRepo: Repository<ArticlesEntity>,
  ) {}
}

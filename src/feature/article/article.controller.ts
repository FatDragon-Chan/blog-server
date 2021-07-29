import { Controller, Inject } from '@nestjs/common';
import { ArticleService } from './article.service';
import { AuthService } from '../../core/auth/auth.service';

@Controller('user')
export class ArticleController {
  constructor(
    @Inject(ArticleService) private readonly userService: ArticleService,
    @Inject(AuthService) private readonly authService: AuthService,
  ) {}
}

import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

import { UserService } from '../service/user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private UserService: UserService) {}

  async use(req: any, res: any, next: () => void) {
    const userinfo = await this.UserService.getUserInfo();

    if (!userinfo) {
      throw new HttpException('登陆失效,请重新登陆', HttpStatus.BAD_REQUEST);
    }

    next();
  }
}

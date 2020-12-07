import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

import { UserService } from '../service/user/user.service';

const whiteList = [
  '/api/commons/citys',
  '/api/house/hot',
  '/api/user/login',
  '/api/user/register',
];

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private UserService: UserService) {}

  async use(req: any, res: any, next: () => void) {
    const url = req.originalUrl;

    //白名单的直接返回
    if (whiteList.includes(url)) {
      next();
      return;
    }

    const userinfo = await this.UserService.getUserInfo();
    if (!userinfo) {
      throw new HttpException('登陆失效,请重新登陆', HttpStatus.BAD_REQUEST);
    }
    next();
  }
}

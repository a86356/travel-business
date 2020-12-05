import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

const whiteList = ['/admin/login'];

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;

    const request = context.switchToHttp().getRequest();
    const token = request.headers.token;
    const url = request.route.path;

    //白名单的直接返回
    if (whiteList.includes(url)) {
      return true;
    }

    if (!token) {
      throw new HttpException('用户未登录', HttpStatus.BAD_REQUEST);
    }

    if (token != '1') {
      throw new HttpException('登陆失效,请重新登陆', HttpStatus.BAD_REQUEST);
    }

    return true;
  }
}

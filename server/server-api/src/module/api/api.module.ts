import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import {LoggerMiddleware} from "./middleware/logger.middleware";
import { APP_FILTER,APP_GUARD  } from '@nestjs/core';
import {HttpExceptionFilter} from "./filter/http-exception.filter";

import { AuthGuard } from './guard/auth.guard';

@Module({
  controllers: [UserController],
  providers: [UserService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: []
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
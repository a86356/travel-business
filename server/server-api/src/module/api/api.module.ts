import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import {LoggerMiddleware} from "./middleware/logger.middleware";
import { APP_FILTER,APP_GUARD  } from '@nestjs/core';
import {HttpExceptionFilter} from "./filter/http-exception.filter";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from './guard/auth.guard';
import {User} from "../../entity/user.entity";

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
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'travel',
      entities: [User],  //实体部分
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),  //实体
  ]
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
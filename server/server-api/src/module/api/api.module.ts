import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthMiddleware } from './middleware/auth.middleware';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonsController } from './controller/commons/commons.controller';
import { CommonsService } from './service/commons/commons.service';
import { HouseController } from './controller/house/house.controller';
import { HouseService } from './service/house/house.service';

import { User } from '../../entity/user.entity';
import { City } from '../../entity/city.entity';
import { House } from '../../entity/house.entity';
import { Comment } from '../../entity/comment.entity';
import { CommentsController } from './controller/comments/comments.controller';
import { CommentsService } from './service/comments/comments.service';
import { OrderController } from './controller/order/order.controller';
import { OrderService } from './service/order/order.service';

const list = [User, City, House, Comment];

@Module({
  controllers: [
    UserController,
    CommonsController,
    HouseController,
    CommentsController,
    OrderController,
  ],
  providers: [
    UserService,
    CommonsService,
    HouseService,
    CommentsService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    OrderService,
  ],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'travel',
      entities: list, //实体部分
      synchronize: true,
    }),
    TypeOrmModule.forFeature(list), //实体
  ],
  exports: [UserService],
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware, AuthMiddleware).forRoutes('*');
  }
}

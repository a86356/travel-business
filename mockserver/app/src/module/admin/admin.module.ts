import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DetailController } from './controller/detail/detail.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { AuthGuard } from './guard/auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './service/user/user.service';
import { ApiController } from './controller/api/api.controller';

@Module({
  controllers: [DetailController, ApiController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    UserService,
  ],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '47.92.6.86',
      port: 3306,
      username: 'user',
      password: 'storecode8888',
      database: 'csteach',
      //autoLoadEntities: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([]), //实体
  ],
})
export class AdminModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

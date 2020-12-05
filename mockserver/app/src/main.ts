import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './module/admin/filter/http-exception.filter';
import { ValidatePipe } from './module/admin/pipe/validate.pipe';
import { TransformInterceptor } from './module/admin/interceptor/transform.interceptor';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidatePipe());

  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  //cookie
  app.use(cookieParser('123'));
  //gzip
  app.use(compression());

  // 防止一些web漏洞
  app.use(helmet());

  //dos攻击
  // app.use(
  //   rateLimit({
  //     windowMs: 15 * 60 * 1000, // 15 minutes
  //     max: 100, // limit each IP to 100 requests per windowMs
  //   }),
  // );

  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidatePipe } from './module/api/pipe/validate.pipe';
import { TransformInterceptor } from './interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidatePipe());
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  app.setGlobalPrefix('api'); // http://localhost:5001/test  =>  http://localhost:5001/api/test

  await app.listen(4000);
}
bootstrap();

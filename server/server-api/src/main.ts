import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidatePipe } from './module/api/pipe/validate.pipe';
import { TransformInterceptor } from './interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidatePipe());
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());


  await app.listen(4000);
}
bootstrap();

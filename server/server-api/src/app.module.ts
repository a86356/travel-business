import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { ApiModule } from './module/api/api.module';
import { SharedModule } from './module/shared/shared.module';


@Module({
  imports: [ApiModule, SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
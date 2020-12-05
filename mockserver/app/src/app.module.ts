import {Module} from '@nestjs/common';
import {ApiModule} from './module/api/api.module';
import {AdminModule} from './module/admin/admin.module';
import { SharedModule } from './module/shared/shared.module';

@Module({
  imports: [ApiModule, AdminModule, SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

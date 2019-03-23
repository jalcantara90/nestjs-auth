// Commons
import { Module } from '@nestjs/common';

// Controllers
import { AppController } from './app.controller';

// Modules
import { AuthModule } from './auth/auth.module';
import { UserModule } from './bd/user/user.module';

// Services
import { AppService } from './app.service';

// Config
import { MONGO_URI } from './config/config';

@Module({
  imports: [
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

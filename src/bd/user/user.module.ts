import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { UserSchema } from './schemas/user.schema';
import { DBModule } from '../db.module';
import { UserProviders } from './user.providers';

@Module({
  imports: [ DBModule ],
  providers: [ UserService, ...UserProviders ],
  controllers: [ UserController ],
})
export class UserModule {}

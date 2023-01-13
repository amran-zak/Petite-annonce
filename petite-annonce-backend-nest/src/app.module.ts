import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PasswordModule } from './password/password.module';

@Module({
  imports: [
      MongooseModule.forRoot(
          "mongodb+srv://rootAccess:UfsREETshSn9igN@monlogement.wdjryvj.mongodb.net/?retryWrites=true&w=majority"
      ),
      UsersModule,
      AuthModule,
      PasswordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

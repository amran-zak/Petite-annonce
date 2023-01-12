import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';

@Module({
  imports: [
      MongooseModule.forRoot(
          "mongodb+srv://<rootAccess>:<UfsREETshSn9igN>@cluster0.kngtf.mongodb.net/session-auth?retryWrites=true&w=majority"
      ),
      UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
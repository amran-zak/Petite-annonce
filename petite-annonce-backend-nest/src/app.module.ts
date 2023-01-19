import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PasswordModule } from './password/password.module';
<<<<<<< Updated upstream
import { CategoryModule } from './category/category.module';
=======
import { TypeModule } from './type/type.module';
>>>>>>> Stashed changes

@Module({
  imports: [
      MongooseModule.forRoot(
          "mongodb+srv://rootAccess:UfsREETshSn9igN@monlogement.wdjryvj.mongodb.net/?retryWrites=true&w=majority"
      ),
      UsersModule,
      AuthModule,
      PasswordModule,
<<<<<<< Updated upstream
      CategoryModule,
=======
      TypeModule,
>>>>>>> Stashed changes
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

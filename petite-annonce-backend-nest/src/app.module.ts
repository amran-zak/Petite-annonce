import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PasswordModule } from './password/password.module';
import { CategoryModule } from './category/category.module';
import { TypeModule } from './type/type.module';
import { PostModule } from './post/post.module';
import { ImageModule } from './image/image.module';
import {MulterModule} from "@nestjs/platform-express";
import {memoryStorage} from "multer";

@Module({
  imports: [
      MongooseModule.forRoot(
          "mongodb+srv://rootAccess:UfsREETshSn9igN@monlogement.wdjryvj.mongodb.net/?retryWrites=true&w=majority"
      ),
      UsersModule,
      AuthModule,
      PasswordModule,
      CategoryModule,
      TypeModule,
      PostModule,
      ImageModule,
      MulterModule.register({
          dest: './uploads',
          storage: memoryStorage()
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

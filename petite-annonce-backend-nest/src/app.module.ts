import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MulterModule } from "@nestjs/platform-express";
import { memoryStorage } from "multer";

import { ConfigModule } from '@nestjs/config';
import { MongooseModule} from "@nestjs/mongoose";
import { PostModule } from './post/post.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PasswordModule } from './password/password.module';
import { CategoryModule } from './category/category.module';
import { TypeModule } from './type/type.module';
import { MailModule } from './mail/mail.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { configEnvs } from './config';

@Module({
  imports: [
      MongooseModule.forRoot(
          configEnvs.mongoURL, {
              useNewUrlParser: true
          }
      ),
      ConfigModule.forRoot({
          envFilePath: '.env',
          isGlobal: true
      }),
      UsersModule,
      AuthModule,
      PasswordModule,
      CategoryModule,
      TypeModule,
      PostModule,
      MailModule,
      CloudinaryModule,
      MulterModule.register({
          dest: './uploads',
          storage: memoryStorage()
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

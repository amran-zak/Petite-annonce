import { Module } from '@nestjs/common';
import { PasswordController } from './password.controller';
import { PasswordService } from './password.service';
import {MongooseModule} from "@nestjs/mongoose";
import {PasswordSchema} from "./password.model";
import {MailerModule} from "@nestjs-modules/mailer";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [
      MongooseModule.forFeature([{name: "password", schema: PasswordSchema}]),
      MailerModule.forRoot({
        transport: {
          host: "0.0.0.0",
          port: 1025
        },
        defaults: {
          from: 'admin@example.com'
        }
      }),
      UsersModule
  ],
  controllers: [PasswordController],
  providers: [PasswordService]
})
export class PasswordModule {}

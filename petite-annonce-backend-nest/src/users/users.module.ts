import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./model/users.model";
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CloudinaryModule } from "../cloudinary/cloudinary.module";
import {AuthService} from "../auth/auth.service";

@Module({
  imports: [
      MongooseModule.forFeature([{name: "user", schema: UserSchema}]),
      CloudinaryModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}

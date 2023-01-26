import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./schemas/user.schema";
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Module({
  imports: [
      MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
  controllers: [UserController],
  providers: [UserService, CloudinaryService],
    exports: [UserService],
})
export class UserModule {}

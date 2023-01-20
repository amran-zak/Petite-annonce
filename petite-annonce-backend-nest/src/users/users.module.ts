import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./model/users.model";

@Module({
  imports: [MongooseModule.forFeature([{name: "user", schema: UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}

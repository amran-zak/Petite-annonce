import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {TypeSchema} from "./schema/type.schema";

@Module({
  imports: [MongooseModule.forFeature([{name: "Type", schema: TypeSchema}])
  ],
  controllers: [TypeController],
  providers: [TypeService],
  exports: [TypeService]
})
export class TypeModule {}

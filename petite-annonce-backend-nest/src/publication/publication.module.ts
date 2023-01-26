import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {PublicationSchema} from "./schemas/publication.schema";

@Module({
  imports: [
      MongooseModule.forFeature([{ name: 'Publication', schema: PublicationSchema }])
  ],
  controllers: [PublicationController],
  providers: [PublicationService]
})
export class PublicationModule {}

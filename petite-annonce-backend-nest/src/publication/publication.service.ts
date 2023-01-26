import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreatePublicationDto, updatePublicationDto } from './dto/create-publication.dto';
import {Publication} from "./schemas/publication.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User, UserSchema} from "../users/schemas/user.schema";

@Injectable()
export class PublicationService {

  constructor(@InjectModel('Publication') private publicationModel: Model<Publication>) {}

  async findAll(): Promise<Publication[]> {
    try {
      return await this.publicationModel.find().populate('user');
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAllMe(user): Promise<Publication[]> {
    try {
      return await this.publicationModel.find({user}).populate('user');
    } catch (error) {
      throw new Error(error);
    }
  }
  async findById(id: string): Promise<Publication> {
    try {
      const publication = await this.publicationModel
          .findById(id).populate('user');

      if (!publication) {
        throw new HttpException('Annonce introuvable', HttpStatus.NO_CONTENT);
      }

      return publication;
    } catch (error) {
      throw new Error(error);
    }
  }
  async createPublication(createPublicationDto: CreatePublicationDto, user): Promise<Publication> {
    try {
      const publication = await this.publicationModel.create(createPublicationDto);
      publication.user = user;
      return await publication.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async updatePublication(id: string, updatePublicationDto: updatePublicationDto): Promise<Publication> {
    try {
      const publication = await this.publicationModel
          .findByIdAndUpdate(id, updatePublicationDto)
          .setOptions({overwrite: true, new : true})
      return publication;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addImages(id: string, images: Array<string>, updatePublicationDto: updatePublicationDto): Promise<Publication> {
    try {
      const publication = await this.publicationModel.findByIdAndUpdate(
          id,
          { images: images },
          updatePublicationDto
      );

      return publication;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addUser(id: string, user: User, updatePublicationDto: updatePublicationDto): Promise<Publication> {
    try {
      const publication = await this.publicationModel.findByIdAndUpdate(
          id,
          { user: user},
          updatePublicationDto
      );

      return publication;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deletePublication(id: string) {
    try {
      await this.publicationModel.findByIdAndDelete(id);
      throw new HttpException('Annonce supprimée', HttpStatus.OK);
    } catch (error) {
      throw new Error(error);
    }
  }
}

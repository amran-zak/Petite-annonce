import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/create-post.dto';
import { PostModel } from "./model/post.model";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class PostService {

  constructor(@InjectModel('Post') private postModel: Model<PostModel>) {}

  async findAll(): Promise<PostModel[]> {
    try {
      return await this.postModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id: string): Promise<PostModel> {
    try {
      const post = await this.postModel
          .findById(id)
          .populate('type')
          .populate('category')
          .populate('user');

      if (!post) {
        throw new HttpException('Annonce introuvable', HttpStatus.NO_CONTENT);
      }

      return post;
    } catch (error) {
      throw new Error(error);
    }
  }
  async createPost(createPostDto: CreatePostDto): Promise<PostModel> {
    try {
      const post = await this.postModel.create(createPostDto);
      return await post.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async updatePost(id: string, updatePostDto: UpdatePostDto): Promise<PostModel> {
    try {
      const post = await this.postModel.findByIdAndUpdate(
          id,
          updatePostDto,
          { new: true }
      )

      return post;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addImages(id: string, images: Array<string>, updatePostDto: UpdatePostDto): Promise<PostModel> {
    try {
      const post = await this.postModel.findByIdAndUpdate(
          id,
          { images: images },
          updatePostDto
      );

      return post;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deletePost(id: string) {
    try {
      await this.postModel.findByIdAndDelete(id);
      throw new HttpException('Annonce supprimée', HttpStatus.OK);
    } catch (error) {
      throw new Error(error);
    }
  }
}

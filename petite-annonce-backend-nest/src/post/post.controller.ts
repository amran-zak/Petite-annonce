import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Res,
  UseInterceptors,
  UploadedFiles
} from '@nestjs/common';
import { PostService } from './post.service';
import {
  CreatePostDto,
  UpdatePostDto
} from './dto/create-post.dto';
import { AuthenticatedGuard} from "../auth/authenticated.guard";
import { PostModel } from "./model/post.model";
import {FilesInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {editFileName, imageFileFilter} from "../utils/file-uploading.utils";

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // @UseGuards(AuthenticatedGuard)
  @Post('create')
  @UseInterceptors(
      FilesInterceptor('images[]', 10, {
        storage: diskStorage({
          destination: './uploads',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
      })
  )
  async create(
      @Res() res,
      @UploadedFiles() images,
      @Body() createPostDto: CreatePostDto,
      @Body() updatePostDto: UpdatePostDto
  ): Promise<PostModel> {
    try {

      const post = await this.postService.createPost(createPostDto);

      const response = [];
      const filesName: Array<string> = [];
      images.forEach((image) => {

        filesName.push(image.filename);

        const fileReponse = {
          originalname: image.originalname,
          filename: image.filename
        };
        response.push(fileReponse);
      });

      await this.postService.addImages(post._id, filesName, updatePostDto);

      return res.json({
        message: "L'annonce à bien été crée !",
        post,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  async findAll(@Res() res): Promise<PostModel[]> {
    try {
      const posts = await this.postService.findAll();

      return res.json({
        message: "Liste des annonces bien récupérée !",
        posts
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':id')
  async findById(
      @Res() res,
      @Param('id') id: string
  ): Promise<PostModel> {
    try {
      const post = await this.postService.findById(id);

      return res.json({
        message: "L'annonce a bien été récupérée !",
        post
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Patch(':id')
  async update(
      @Res() res,
      @Param('id') id: string,
      @Body() updatePostDto: UpdatePostDto
  ): Promise<PostModel> {
    try {
      const post = await this.postService.updatePost(
          id,
          updatePostDto
      );

      return res.json({
        message: "L'annonce à bien été modifiée !",
        post
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Delete(':id')
  async delete(
      @Res() res,
      @Param('id') id: string
  ) {
    try {
      const post = await this.postService.deletePost(id);

      return res.json({
        message: "L'annonce à bien été supprimée !"
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

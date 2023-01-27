import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Res, Param, Patch, Delete, Put, Req,
} from '@nestjs/common';
import { PublicationService } from './publication.service';
import {CreatePublicationDto, updatePublicationDto} from './dto/create-publication.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {Publication} from "./schemas/publication.schema"
import {Request} from "express";
import {UserPermission} from "../users/user.decorator";

@Controller('publication')
export class PublicationController {
  constructor(private publicationService: PublicationService) {}




  @Get()
  async findAll(@Res() res): Promise<Publication[]> {
    try {
      const publications = await this.publicationService.findAll();
      return res.json({
        message: "Liste des annonces bien récupérée !",
        publications
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async findAllMe(@Res() res, @UserPermission() user): Promise<Publication[]> {
    try {
      const publications = await this.publicationService.findAllMe(user);
      return res.json({
        message: "Liste de mes annonces bien récupérée !",
        publications
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':publicationID')
  async findById(
      @Res() res,
      @Param('publicationID') publicationID: string
  ): Promise<Publication> {
    try {
      const publication = await this.publicationService.findById(publicationID);

      return res.json({
        message: "L'annonce a bien été récupérée !",
        publication
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async create(@Res() res, @Body() createPublicationDto: CreatePublicationDto, @Req() request: Request): Promise<Publication> {
    try {

      const user = request.user;
      const publication = await this.publicationService.createPublication(createPublicationDto, user);

      return res.json({
        message: "L'annonce à bien été crée !",
        publication
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put(':publicationID')
  async update(@Res() res, @Param('publicationID') publicationID: string, @Body() updatePublicationDto: updatePublicationDto, @UserPermission() user): Promise<Publication> {
    try {
      const publication = await this.publicationService.updatePublication(publicationID, updatePublicationDto, user);

      return res.json({
        message: "L'annonce à bien été modifiée !",
        publication
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':publicationID')
  async delete(
      @Res() res,
      @Param('publicationID') publicationID: string,
      @UserPermission() user,
  ) {
    try {
      const message = await this.publicationService.deletePublication(publicationID, user);

      return res.json({
        message
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Res, Param, Patch, Delete,
} from '@nestjs/common';
import { PublicationService } from './publication.service';
import {CreatePublicationDto, updatePublicationDto} from './dto/create-publication.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {Publication} from "./schemas/publication.schema"

@Controller('publication')
export class PublicationController {
  constructor(private publicationService: PublicationService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async create(@Res() res, @Body() createPublicationDto: CreatePublicationDto): Promise<Publication> {
    try {

      const publication = await this.publicationService.createPublication(createPublicationDto);

      return res.json({
        message: "L'annonce à bien été crée !",
        publication
      });
    } catch (error) {
      throw new Error(error);
    }
  }


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

  @Get(':publicationID')
  async findById(
      @Res() res,
      @Param('publicationID') id: string
  ): Promise<Publication> {
    try {
      const publication = await this.publicationService.findById(id);

      return res.json({
        message: "L'annonce a bien été récupérée !",
        publication
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':publicationID')
  async update(
      @Res() res,
      @Param('id') id: string,
      @Body() updatePublicationDto: updatePublicationDto
  ): Promise<Publication> {
    try {
      const publication = await this.publicationService.updatePublication(
          id,
          updatePublicationDto
      );

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
      @Param('publicationID') publicationID: string
  ) {
    try {
      const publication = await this.publicationService.deletePublication(publicationID);

      return res.json({
        message: "L'annonce à bien été supprimée !"
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

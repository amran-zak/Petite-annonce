import {  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseGuards,} from '@nestjs/common';
import { TypeService } from './type.service';
import { CreateTypeDto, UpdateTypeDto } from './dto/create-type.dto';
import { AuthenticatedGuard} from "../auth/authenticated.guard";
import { Type } from './model/type.model';


@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @UseGuards(AuthenticatedGuard)
  @Post('/create')
  async create(@Res() res, @Body() createTypeDto: CreateTypeDto): Promise<Type> {
    try {
      const type = await this.typeService.createType(
          createTypeDto,
      );
      return res.json({
        message: 'Type créé avec succés',
        type,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get('/types')
  async findAll(@Res() res): Promise<Type[]> {
    try {
      const type = await this.typeService.findAll();
      return res.json({
        message: 'Catégories obtenues avec succès',
        type,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get('type/:id')
  async findById(@Res() res,  @Param('id') id: string): Promise<Type> {
    try {
      const type = await this.typeService.findById(id);
      return res.json({
        message: 'Catégorie obtenue avec succès',
        type,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Put('update/:id')
  async update(@Res() res, @Param('id') id: string, @Body() UpdateTypeDto: UpdateTypeDto,): Promise<Type> {
    try {
      const type = await this.typeService.updateType(
          id,
          UpdateTypeDto,
      );
      return res.json({
        message: 'Categorie mise à jour avec succés',
        type,
      });
    } catch (error) {
      console.log(error);
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
      await this.typeService.deleteType(id);

      return res.json({
        message: "Le type a bien été supprimé !"
      })
    } catch (error) {
      throw new Error(error);
    }
  }
}

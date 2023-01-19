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
  @Post()
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

  @Get()
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

  @Get('typeID')
  async findById(@Res() res,  @Param('typeID') typeID: string): Promise<Type> {
    try {
      const type = await this.typeService.findById(typeID);
      return res.json({
        message: 'Catégorie obtenue avec succès',
        type,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Put(':typeID')
  async update(@Res() res, @Param('typeID') typeID: string, @Body() UpdateTypeDto: UpdateTypeDto,): Promise<Type> {
    try {
      const type = await this.typeService.updateType(
          typeID,
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

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.typeService.remove(+id);
  // }
}

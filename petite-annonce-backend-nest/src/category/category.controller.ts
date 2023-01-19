import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res, Put} from '@nestjs/common';
import { CategoryService } from './category.service';
import {
  CreateCategoryDto,
  UpdateCategoryDto
} from './dto/create-category.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { Category } from "./model/category.model";

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(AuthenticatedGuard)
  @Post()
  async create(
      @Res() res,
      @Body() createCategoryDto: CreateCategoryDto
  ): Promise<Category> {
    try {
      const category = await this.categoryService.createCategory(
          createCategoryDto
      );

      return res.json({
        message: 'Catégorie crée !',
        category
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  async findAll(@Res() res): Promise<Category[]> {
    try {
      const categories = await this.categoryService.findAll();

      return res.json({
        message: "Liste des catégories bien récupérée !",
        categories
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':id')
  async findById(
      @Res() res,
      @Param('id') id: string
  ): Promise<Category> {
    try {
      const category = await this.categoryService.findById(id);

      return res.json({
        message: "La catégorie à bien été récupérée !",
        category
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Put(':id')
  async update(
      @Res() res,
      @Param('id') id: string,
      @Body() updateCategoryDto: UpdateCategoryDto
  ): Promise<Category> {
    try {
      const category = await this.categoryService.updateCategory(
          id,
          updateCategoryDto
      );

      return res.json({
        message: "La catégorie à bien été mise à jour !",
        category
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
      await this.categoryService.deleteCategory(id);

      return res.json({
        message: "La catégorie à bien été supprimée !"
      })
    } catch (error) {
      throw new Error(error);
    }
  }
}

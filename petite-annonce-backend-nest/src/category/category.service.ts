import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {
  CreateCategoryDto,
  UpdateCategoryDto
} from './dto/create-category.dto';
import { Category } from "./interfaces/category.interface";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class CategoryService {

  constructor(
      @InjectModel('Category') private categoryModel: Model<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    try {
      return await this.categoryModel.find()
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id: string): Promise<Category> {
    try {
      const category = await this.categoryModel.findById(id);

      if (!category) {
        throw new HttpException("Catégorie introuvable", HttpStatus.NO_CONTENT);
      }

      return category;
    } catch (error) {
      throw new Error(error);
    }
  }
  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const category = await this.categoryModel.create(createCategoryDto);
      return await category.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateCategory(categoryID: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    try {
      const category = await this.categoryModel.findByIdAndUpdate(
          categoryID,
          updateCategoryDto,
          { new: true }
      );

      return category;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteCategory(categoryID: string) {
    try {
      await this.categoryModel.findByIdAndDelete(categoryID);

      throw new HttpException("Catégorie supprimée", HttpStatus.OK);
    } catch (error) {
      throw new Error(error);
    }
  }
}

import { HttpException, HttpStatus, Injectable} from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel} from "@nestjs/mongoose";
import { CreateTypeDto, UpdateTypeDto } from './dto/create-type.dto';
import { Type } from './interfaces/type.interface';
@Injectable()
export class TypeService {

  constructor(@InjectModel('Type') private typeModel: Model<Type>) {
  }

  async findAll(): Promise<Type[]> {
    try {
      return await this.typeModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id: string): Promise<Type> {
    try {
      const type = await this.typeModel.findById(id);

      if (!type) {
        throw new HttpException('Type introuvable', HttpStatus.NO_CONTENT);
      }

      return type;
    }catch (error) {
      throw new Error(error);
    }
  }

  async createType(CreateTypeDto: CreateTypeDto,): Promise<Type> {
    try {
      const type = await this.typeModel.create(CreateTypeDto);
      return await type.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateType(
      typeID: string,
      UpdateTypeDto: UpdateTypeDto,
  ): Promise<Type> {
    try {
      const type = await this.typeModel.findByIdAndUpdate(
          typeID,
          UpdateTypeDto,
          { new: true },
      );

      return type;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteType(id: string) {
    try {
      await this.typeModel.findByIdAndDelete(id);

      const message = "Le type a bien été supprimé !";
      return message;
    } catch (error) {
      throw new Error(error);
    }
  }
}

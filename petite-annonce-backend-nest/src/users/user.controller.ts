import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {UserService} from './user.service';
import {UpdateUserDTO} from './dto/register-user.dto';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import {User, UserRole} from "./interfaces/user.interface";
import {FileInterceptor} from "@nestjs/platform-express";
import {RolesGuard} from "../auth/roles.guard";
import {hasRoles} from "../auth/roles.decorator";
import {UserPermission} from "./user.decorator";
import {Publication} from "../publication/schemas/publication.schema";


@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  uploadAvatar(@UploadedFile() file: Express.Multer.File) {
    try {
      return this.usersService.UploadAvatarToCloudinary(file);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @hasRoles(UserRole.ADMIN)
  async findAll(@Res() res): Promise<User[]> {
    try {
      const users = await this.usersService.findAll();
      return res.json({
        message: 'Utilisateurs obtenus',
        users,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  // @UseGuards(JwtAuthGuard)
  // @Get(':userID')
  // async findById(@Res() res, @Param('userID') userID): Promise<User> {
  //   try {
  //     const user = await this.usersService.findUserById(userID);
  //     return res.json({
  //       message: 'Utilisateur obtenu ',
  //       user,
  //     });
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }

  @UseGuards(JwtAuthGuard)
  @Put(':userID')
  async update(
      @Res() res,
      @Param('userID') userID,
      @Body() updateUserDTO: UpdateUserDTO,
      @UserPermission() user_): Promise<User> {
    try {
      const user = await this.usersService.updateUser(userID, updateUserDTO, user_);
      return res.json({
        message: 'Utilisateur mis à jour',
        user,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':userID')
  async delete(
      @Res() res,
      @Param('userID') userID: string,
      @UserPermission() user_): Promise<User> {
    try {
      const user = await this.usersService.deleteUSer(userID, user_);
      return res.json({
        message: 'Utilisateur supprimé',
        user,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async findAllMe(@Res() res, @UserPermission() user): Promise<User> {
    try {
      const user_ = await this.usersService.findAllMe(user);
      return res.json({
        message: "Mes informations bien récupérées !",
        user_
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

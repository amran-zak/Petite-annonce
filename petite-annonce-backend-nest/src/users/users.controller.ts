import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { LocalAuthGuard} from "../auth/local.auth.guard";
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async addUser(
      @Body('lastname') lastName: string,
      @Body('firstname') firstName: string,
      @Body('email') email: string,
      @Body('number') number: number,
      @Body('password') password: string,
      @Body('address') address: string,
      @Body('code_postal') code_postal: number,
      @Body('city') city: string,
      @Body('img') img: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await this.usersService.insertUser(
        firstName,
        lastName,
        email,
        hashedPassword,
        number,
        address,
        code_postal,
        city,
        img
    );
    return {
      msg: 'Utilisateur enregistré',
      userId: result.id,
      email: result.email
    }
  }

  // @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req): any {
    return {User: req.user,
      msg: 'User logged in'};
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/protected')
  getHello(@Request() req): string {
    return req.user;
  }

  @Get('/logout')
  logout(@Request() req): any {
    req.session.destroy();
    return { msg: 'The user session has ended' }
  }
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}

import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { RegisterUserDTO } from '../users/dto/register-user.dto';
import { User } from '../users/model/users.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
      @InjectModel('User') private readonly userModel: Model<User>,
      private userService: UsersService,
      private jwtService: JwtService,
      private mailService: MailService,
  ) {}

  async registerUser(registerUserDTO: RegisterUserDTO): Promise<User> {
    try {
      const { password, email } = registerUserDTO;

      const salt = await bcrypt.genSalt();

      const userExist = await this.userService.findOne(email);

      if (userExist) {
        throw new ConflictException('Username already exist');
      }

      const user = new this.userModel(registerUserDTO);

      user.email = email;
      user.password = await this.hashPassword(password, salt);

      const token = Math.floor(1000 + Math.random() * 9000).toString();
      await this.mailService.sendUserConfirmation(user, token);

      return await user.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  private hashPassword(password, salt): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async login(user: any) {
    const payload = {
      id: user._doc._id,
      email: user._doc.email,
    };

    return {
      acces_token: this.jwtService.sign(payload),
    };
  }
}
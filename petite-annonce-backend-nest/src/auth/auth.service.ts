import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService} from "../users/users.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {
  }
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(email);
    const passwordValid = await bcrypt.compare(password, user.password)
    if (!user) {
      throw new NotAcceptableException('Utilisateur introuvable');
    }
    if (user && passwordValid) {
      return {
        userId: user.id,
        email: user.email
      };
    }
    return null;
  }}

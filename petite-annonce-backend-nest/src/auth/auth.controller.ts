import {
    Body,
    Controller,
    Post,
    Request,
    Res,
    UseGuards,
} from '@nestjs/common';
import { RegisterUserDTO } from '../users/dto/register-user.dto';
import { User } from '../users/model/users.model';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.auth.guard';
import { JwtAuthGuard } from "./jwt-auth.guard";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('register')
    async create(
        @Res() res,
        @Body() registerUserDTO: RegisterUserDTO,
    ): Promise<User> {
        try {
            const user = await this.authService.registerUser(registerUserDTO);

            return res.json({
                message: "Utilisateur bien enregistré !",
                user
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    @UseGuards(LocalAuthGuard)
    @UseGuards(JwtAuthGuard)
    @Post('login')
    async login(@Res() res, @Request() req) {
        const userToken = await this.authService.login(req.user);

        return res.json({
            message: "Utilisateur bien connecté !",
            userToken
        });
    }

}
import {
    Body,
    Controller, Get,
    Post,
    Request,
    Res,
    UseGuards,
} from '@nestjs/common';
import { RegisterUserDTO } from '../users/dto/register-user.dto';
import { User } from '../users/schemas/user.schema';
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
                user,
            });
        } catch (error) {
            throw new Error(error);
        }
    }
    @Post('login')
    async login(@Res() res, @Request() req) {

        const user = await this.authService.validateUser(req.body.email, req.body.password);

        if (user) {
            const userToken = await this.authService.login(user);
            return res.json({
                message: "Utilisateur bien connecté !",
                userToken,
            });
        }

        return res.json({
            message: "Utilisateur introuvable !"
        })

    }
    @UseGuards(JwtAuthGuard)
    @Get('logout')
    async logout(@Res() res) {
        try {
            const message = this.authService.logout();
            return res.json({
                message,
            });
        } catch (error) {
            throw new Error(error);
        }
    }
}

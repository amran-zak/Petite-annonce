import {BadRequestException, Body, Controller, NotFoundException, Post} from '@nestjs/common';
import { PasswordService } from "./password.service";
import {MailerService} from "@nestjs-modules/mailer";
import {UsersService} from "../users/users.service";
import {Password} from "./password.model";
import * as bcrypt from "bcrypt";

@Controller('password')
export class PasswordController {

    constructor(
        private passwordService: PasswordService,
        private mailerService: MailerService,
        private readonly usersService: UsersService
    ) {}

    @Post('forgot')
    async forgot(
        @Body('email') email: string
    ) {
        const token = Math.random().toString().substring(2, 12);

        await this.passwordService.create(email, token);

        const url = `http://localhost:3000/password/reset/${token}`;

        await this.mailerService.sendMail({
            to: email,
            subject: 'Réinitialisez votre mot de passe!',
            html: `Cliquez <a href="${url}">ici</a> pour réinitialiser votre mot de passe.`
        });

        return {message: "Un email vous à été envoyé !"}
    }

    @Post('reset')
    async reset(
        @Body('token') token: string,
        @Body('password') password: string,
        @Body('password_confirm') password_confirm: string
    ){
        if (password !== password_confirm) {
            throw new BadRequestException("Les mots de passe sont différents");
        }

        const passwordReset: Password = await this.passwordService.findOne(token);

        const user = await this.usersService.getUser(passwordReset.email);

        if (!user) {
            throw new NotFoundException("Utilisateur introuvable");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await this.usersService.updatePassword(user._id, hashedPassword);

        return {
            message: "Mot de passe modifié avec succès !"
        }
    }

}
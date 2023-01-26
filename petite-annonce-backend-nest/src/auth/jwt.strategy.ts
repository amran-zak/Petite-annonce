import {Injectable, UnauthorizedException} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "../users/interfaces/user.interface";
import {PayloadInterface} from "./payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(@InjectModel('User') private readonly userModel: Model<User>,) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpliration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: PayloadInterface) {
        const user = await this.userModel.findOne({email: payload.email})
        if (user) {
            return user;
        } else {
            throw new UnauthorizedException();
        };
    }
}
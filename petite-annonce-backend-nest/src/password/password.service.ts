import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Password} from "../password/password.model";

@Injectable()
export class PasswordService {

    constructor(@InjectModel('password') private readonly passwordModel: Model<Password>) {
    }

    async create(email: string, token: string,) {
        const mdp = new this.passwordModel({
            email,
            token
        });

        await mdp.save();
        return mdp;
    }

    async findOne(token: string) {
        const password = await this.passwordModel.findOne({token});
        return password;
    }

}

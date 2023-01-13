import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "./users.model";

@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<User>) {
    }

    async insertUser(firstname: string, lastname: string,
                     email: string, password: string,
                     number: number, address: string,
                     code_postal: number, city: string, img: string) {
        const newUser = new this.userModel({
            firstname, lastname,
            email, password,
            number, address,
            code_postal, city, img
        });
        await newUser.save();
        return newUser;
    }

    async getUser(email: string) {
        const user = await this.userModel.findOne({ email });
        return user;
    }

    async updatePassword(id: string, password: string) {
        return this.userModel.updateOne({"_id": id}, {"password": password});
    }

    // create(createUserDto: CreateUserDto) {
    //     return 'This action adds a new user';
    // }
    //
    // findAll() {
    //     return `This action returns all users`;
    // }
    //
    // findOne(id: number) {
    //     return `This action returns a #${id} user`;
    // }
    //
    //
    // remove(id: number) {
    //     return `This action removes a #${id} user`;
    // }
}
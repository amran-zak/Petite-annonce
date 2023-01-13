import { Model } from "mongoose";
import { User } from "./users.model";
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    insertUser(firstname: string, lastname: string, email: string, password: string, number: number, address: string, code_postal: number, city: string, img: string): Promise<User & Required<{
        _id: string;
    }>>;
    getUser(email: string): Promise<User & Required<{
        _id: string;
    }>>;
    updatePassword(id: string, password: string): Promise<import("mongodb").UpdateResult>;
}

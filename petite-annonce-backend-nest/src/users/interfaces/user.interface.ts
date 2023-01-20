import { Document } from "mongoose";

export interface User extends Document {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    number: number;
    address: string;
    code_postal: number;
    city: string;
    img: string;
    isEmailConfirmed: boolean;
    createdAt?: Date;
}
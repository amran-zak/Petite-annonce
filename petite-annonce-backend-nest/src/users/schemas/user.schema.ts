import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from "mongoose";
import {UserRole} from "../interfaces/user.interface";

export type UserSchema = User & Document;

@Schema()
export class User {
    _id: string;
    @Prop({type: String, required: true})
    firstname: string;

    @Prop({type: String, required: true})
    lastname: string;

    @Prop({type: String, required: true, unique: true})
    email: string;

    @Prop({type: String, required: true})
    password: string;

    @Prop({type: Number, required: false})
    number: number;

    @Prop({type: String, required: true})
    address: string;

    @Prop({type: Number, required: true})
    code_postal: number;

    @Prop({type: String, required: true})
    city: string;

    @Prop({type: String, required: false})
    img: string;

    @Prop({type: Boolean, default: true})
    isEmailConfirmed: boolean;

    @Prop({type: String, enum: UserRole, default: UserRole.USER})
    role: UserRole;

    @Prop({type: Date, default: Date.now})
    createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

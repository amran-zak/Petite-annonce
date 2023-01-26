import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import {User} from "../../users/schemas/user.schema";

export type PublicationSchema = Publication & Document;
@Schema()
export class Publication {
    @Prop({type: String, required: true})
    title: string;

    @Prop({type: String, required: false})
    description: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false})
    category: mongoose.Schema.Types.ObjectId;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Type', required: false})
    type: mongoose.Schema.Types.ObjectId;

    @Prop({type: Number, required: false})
    price: number;

    @Prop({type: String, required: false})
    address: string;

    @Prop({type: Number, required: false})
    code_postal: number;

    @Prop({type: String, required: false})
    city: string;

    @Prop({type: Boolean, required: false})
    isVerified: boolean;

    @Prop({type: Number, required: false})
    nbImageMax: number;

    @Prop({type: Array, required: false})
    images: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @Prop({type: Date, default: Date.now})
    createdAt: Date;
}

export const PublicationSchema = SchemaFactory.createForClass(Publication);
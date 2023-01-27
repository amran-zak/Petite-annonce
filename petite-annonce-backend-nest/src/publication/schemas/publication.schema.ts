import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import {User} from "../../users/schemas/user.schema";

export type PublicationSchema = Publication & Document;
@Schema()
export class Publication {
    @Prop({type: String, required: true})
    title: string;
    @Prop({type: String, required: true})
    description: string;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false})
    category: mongoose.Schema.Types.ObjectId;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Type', required: false})
    type: mongoose.Schema.Types.ObjectId;
    @Prop({type: Number, required: true})
    price: number;
    @Prop({type: String, required: true})
    address: string;
    @Prop({type: Number, required: true})
    code_postal: number;
    @Prop({type: String, required: true})
    city: string;
    @Prop({type: Boolean, required: false})
    isVerified: boolean;
    @Prop({type: Number, required: true})
    nbImageMax: number;
    @Prop({type: Array, required: false})
    images: string;
    @Prop({type: Array, required: false})
    details: string;
    @Prop({type: Boolean, required: true})
    charges: boolean;
    @Prop({type: Boolean, required: false, default: false})
    piscine: boolean;
    @Prop({type: Boolean, required: false})
    meubler: boolean;
    @Prop({type: Boolean, required: true, default: false})
    jardin: boolean;
    @Prop({type: String, required: false})
    surface_jardin: string;
    @Prop({type: String, required: false})
    surface_habitable: string;
    @Prop({type: String, required: false})
    surface_terrain: string;
    @Prop({type: String, required: false})
    nbre_piece: string;
    @Prop({type: Number, required: false})
    nbre_chambres: number;
    @Prop({type: Number, required: false})
    nbre_lits: number;
    @Prop({type: Number, required: false})
    nbre_sb: number;
    @Prop({type: Number, required: false})
    nbre_wc: number;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;
    @Prop({type: Date, default: Date.now})
    createdAt: Date;
}

export const PublicationSchema = SchemaFactory.createForClass(Publication);
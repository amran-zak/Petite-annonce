import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import {User} from "../../users/schemas/user.schema";

export type PublicationSchema = Publication & Document;
@Schema()
export class Publication {
    @Prop({type: String, required: false})
    titreAnnonce: string;
    @Prop({type: String, required: false})
    description: string;
    @Prop({type: String, required: false})
    Typeannonce: string;
    @Prop({type: String, required: false})
    Typebien: string;
    @Prop({type: Number, required: false})
    prixValue: number;
    @Prop({type: String, required: false})
    adresse_complet: string;
    @Prop({type: Boolean, required: false})
    isVerified: boolean;
    @Prop({type: Number, required: false})
    nbImageMax: number;
    @Prop({type: Number, required: false})
    dpeValue: number;
    @Prop({type: Number, required: false})
    gesValue: number;
    @Prop({type: String, required: false})
    Chargescomp: string;
    @Prop({type: Array, required: false})
    images: string;
    @Prop({type: Array, required: false})
    details: string;
    @Prop({type: Boolean, required: false})
    charges: boolean;
    @Prop({type: String, required: false})
    Meuble: string;
    @Prop({type: String, required: false})
    ValueGarden: string;
    @Prop({type: Number, required: false})
    surfaceValue: number;
    @Prop({type: Number, required: false})
    pieceValue: number;
    @Prop({type: Number, required: false})
    roomValue: number;
    @Prop({type: Number, required: false})
    nbre_lits: number;
    @Prop({type: Number, required: false})
    bathroomValue: number;
    @Prop({type: Number, required: false})
    personValue: number;
    @Prop({type: Number, required: false})
    wcValue: number;
    @Prop({type: Number, required: false})
    fraisValue: number;
    @Prop({type: Number, required: false})
    chargesValue: number;
    @Prop({type: String, required: false})
    detailsAnnonceAirbnb: string;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;
    @Prop({type: Date, default: Date.now})
    createdAt: Date;
}

export const PublicationSchema = SchemaFactory.createForClass(Publication);

// @Prop({type: String, required: false})
// surface_terrain: string;
// @Prop({type: String, required: false})
// surface_jardin: string;
// @Prop({type: Number, required: true})
// code_postal: number;
// @Prop({type: String, required: true})
// city: string;
// @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false})
// Typeannonce: mongoose.Schema.Types.ObjectId;
// @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Type', required: false})
// type: mongoose.Schema.Types.ObjectId;
// @Prop({type: Boolean, required: false, default: false})
// piscine: boolean;
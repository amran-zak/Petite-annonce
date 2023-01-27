import { Document } from 'mongoose';

export interface Publication extends Document {
    _id: string;
    title: string;
    description: string;
    price: number;
    address: string;
    code_postal: number;
    city: string;
    isVerified: Boolean;
    nbImageMax: number;
    images: string[];
    surface_habitable: string;
    surface_terrain: string;
    nbre_piece: string;
    type: string;
    category: string;
    user: string;
    createdAt?: Date;

}
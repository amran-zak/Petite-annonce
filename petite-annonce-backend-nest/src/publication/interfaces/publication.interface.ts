import { Document } from 'mongoose';

export interface Publication extends Document {
    _id: string;
    title: string;
    description: string;
    price: number;
    address: string;
    code_postal: number;
    city: string;
    isVerified: boolean;
    nbImageMax: number;
    images: string[];
    details: string[];
    charges: boolean;
    piscine: boolean;
    meubler: boolean;
    jardin: boolean;
    surface_jardin: string;
    surface_habitable: string;
    surface_terrain: string;
    nbre_piece: string;
    nbre_chambres: number;
    nbre_lits: number;
    nbre_sb: number;
    nbre_wc: number;
    type: string;
    category: string;
    user: string;
    createdAt?: Date;

}
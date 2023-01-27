import { Document } from 'mongoose';

export interface Publication extends Document {
    _id: string;
    titreAnnonce: string;
    description: string;
    prixValue: number;
    adresse_complet: string;
    isVerified: boolean;
    nbImageMax: number;
    images: string[];
    details: string[];
    charges: boolean;
    piscine: boolean;
    Meuble: string;
    dpeValue: number;
    gesValue: number;
    Chargescomp: number;
    ValueGarden: string;
    surfaceValue: number;
    pieceValue: number;
    roomValue: number;
    nbre_lits: number;
    bathroomValue: number;
    personValue: number;
    wcValue: number;
    fraisValue: number;
    chargesValue: number;
    detailsAnnonceAirbnb: string;
    Typebien: string;
    Typeannonce: string;
    user: string;
    createdAt?: Date;

}

// surface_terrain: string;
// surface_jardin: string;
// code_postal: number;
// city: string;
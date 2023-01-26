import { Document } from "mongoose";

export interface Type extends Document {
    _id: string;
    name: string;
}
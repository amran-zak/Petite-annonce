import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategorySchema = Category & Document;

@Schema()
export class Category {
    @Prop({ type: String, required: true })
    name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
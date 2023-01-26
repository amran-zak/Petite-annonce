import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TypeSchema = Type & Document;

@Schema()
export class Type {
    @Prop({ type: String, required: true })
    name: string;
}

export const TypeSchema = SchemaFactory.createForClass(Type);
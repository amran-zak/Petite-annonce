import * as mongoose from "mongoose"

export const TypeSchema = new mongoose.Schema(
    {
        name: {type: String, required: true}
    }
)
export interface Type extends mongoose.Document {
    _id: string;
    name: string;
}
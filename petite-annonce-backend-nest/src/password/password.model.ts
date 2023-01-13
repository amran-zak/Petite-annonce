import * as mongoose from "mongoose"

export const PasswordSchema = new mongoose.Schema(
    {
        email: {type: String, required: true},
        token: {type: String, required: true, unique: true}
    }
)

export interface Password extends mongoose.Document {
    _id: string;
    email: string;
    token: string;
}
import * as mongoose from "mongoose"

export const UserSchema = new mongoose.Schema(
    {
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        number: {type: Number, required: false},
        address: {type: String, required: true},
        code_postal: {type: Number, required: true},
        city: {type: String, required: true},
        img: {type: String, required: false}
    }
)

export interface User extends mongoose.Document {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    number: number;
    address: string;
    code_postal: number;
    city: string;
    img: string;
}
import * as mongoose from "mongoose"

export const PostSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: false},
        dateCreate: {type: Date, required: false},
        price: {type: Number, required: false},
        address: {type: String, required: false},
        code_postal: {type: Number, required: false},
        city: {type: String, required: false},
        isVerified: {type: Boolean, required: false},
        nbImageMax: {type: Number, required: false},

        images: {type: Array, required: false},

        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Type',
            required: false
        },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: false
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            required: false
        }

    }
)
export interface PostModel extends mongoose.Document {
    _id: string;
    title: string,
    description: string,
    dateCreate: Date,
    price: number,
    address: string,
    code_postal: number,
    city: string,
    isVerified: Boolean,
    nbImageMax: number,
    images: string[],
    type: string,
    category: string,
    user: string,
}
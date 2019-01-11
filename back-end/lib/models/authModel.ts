import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AuthSchema = new Schema({
    login: {
        type: String,
        required: 'Enter a first name'
    },
    password: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    token: {type: String},
    created_date: {
        type: Date,
        default: Date.now
    }
});

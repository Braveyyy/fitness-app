import mongoose, { mongo } from "mongoose";

const userModelSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export const userModel = mongoose.model("UserModel", userModelSchema);
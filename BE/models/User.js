const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        phoneNumber: {
            type: Number,
            required: true,
            trim:true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        createdUsers:[]
    },
    { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
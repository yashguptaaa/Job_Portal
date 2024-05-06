import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: [3, "Name must contain atleast 3 characters!"],
        maxlength: [30, "Name can't exceed 30 characters!"],
    },
    email:{
        type: String,
        require: [true, "Please provide your email!"],
        validate: [validator.isEmail, "Please provide valid email"]
    },
    phone:{
        type: Number,
        required: [true,"Please provide your mobile number"]
    },
    password:{
        type: String,
        required: [true, "please provide a password"],
        minlength: [8, "Password must have atleast 8 characters!"],
        maxlength: [32, "Password can't exceed 32 characters!"],
        select: false
    },
    role:{
        type: String,
        required: [true, "Please provide your role"],
        enum: ['Job Seeker','Employer']
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});


// Hashing of password
userSchema.pre("save",async function (next) {
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

//Comparing Password
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//Generating JWT token fro authorization
userSchema.methods.getJWTtoken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

export const User = mongoose.model("User", userSchema);
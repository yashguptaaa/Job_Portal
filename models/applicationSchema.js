import mongoose from "mongoose";
import validator from "validator";

const applicationSchema = new mongoose.Schema({
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
    coverLetter: {
        type: String,
        required: [true, "please provide your cover Letter!"]
    },
    phone:{
        type: Number,
        required: [true,"Please provide your mobile number!"]
    },
    address: {
        type: String,
        required : [true, "Please provide your address"]
    },
    resume:{
        public_id:{
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    applicantID: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        role: {
            type: String,
            enum: ["Job Seeker"],
            required: true
        }
    },
    employerID: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        role: {
            type: String,
            enum: ["Employer"],
            required: true
        }
    },
});

export const Application = mongoose.model("Application",applicationSchema);

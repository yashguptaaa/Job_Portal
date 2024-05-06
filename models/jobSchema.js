import mongoose, { SchemaTypeOptions } from 'mongoose';

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required : [true, "Please provide job title"],
        minLength: [3, "Job title must contain atleast 3 character!"],
        maxLength: [30, "Job title can't be more thena 30 character!"],
    },
    description: {
        type: String,
        required : [true, "Please provide description"],
        minLength: [10, "Description must contain atleast 10 character!"],
        maxLength: [350, "Description can't be more thena 350 character!"],
    },
    category: {
        type: String,
        required : [true, "Please provide Category!"],
    },
    country: {
        type: String,
        required : [true, "Please provide Country!"],
    },
    city: {
        type: String,
        required : [true, "Please provide City!"],
    },
    location: {
        type: String,
        required : [true, "Please provide Location"],
        minLength: [50, "Job location must contain atleast 50 character!"],
    },
    fixedSalary: {
        type: Number,
        minLength: [4, "Salary must contain atleast 4 digit!"],
        maxLength: [9, "Salary can't be more thena 9 digit!"],
    },
    salaryFrom: {
        type: Number,
        minLength: [4, "SalaryFrom must contain atleast 4 digit!"],
        maxLength: [9, "SalaryFrom can't be more thena 9 digit!"],
    },
    salaryTo: {
        type: Number,
        minLength: [4, "SalaryTo must contain atleast 4 digit!"],
        maxLength: [9, "SalaryTo can't be more thena 9 digit!"],
    },
    expired: {
        type: Boolean,
        default: false,
    },
    JobPostedOn: {
        type: Date,
        default: Date.now,
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
})

export const Job = mongoose.model("Job", jobSchema);
import mongoose from 'mongoose';

 export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbname: "MERN_JOB_SEEKING_WEBSITE"
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((err) =>{
        console.log(`Some error occured while connecting with database:  ${err}`);
    });
};
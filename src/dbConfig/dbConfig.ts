import mongoose from "mongoose";

//every file under api , MUST be connected to this page , connect() is what we use to connect this to api folders

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        })

        connection.on('error', (err) => {
            console.log("Mongo DB connection error , please make sure MongoDB is running. "+err)
            process.exit(1);
        })

    } catch (error) {
        console.log("Something is wrong lol!");
        console.log(error);
    }
}
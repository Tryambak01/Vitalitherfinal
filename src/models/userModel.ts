import mongoose from "mongoose";

//This code below shoes what all is inside our database. When user does signup , we store all that
//information in the database by creating a new 'User' object.

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please provide a username" ],
        unique: true,
    },
    email:{
        type: String,
        required:[true, "Please provide an email"],
        unique:true,
    },
    password: {
        type: String,
        required:[true, "Please provide a password"],
    },
    result:{
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,   //here Date is a type
    verifyToken:String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;
import {connect} from "@/dbConfig/dbConfig";  //importing connect function o establish mongoose from dbconfig
import User from "@/models/userModel";        //importing user from models
import {NextRequest, NextResponse} from "next/server";  //everything is dependent on request and response , you need to take something and give something
import bcryptjs from "bcryptjs";

connect()

export async function POST(request: NextRequest){  //expects request of type NextRequest , NextRequest is likely used to access information about the HTTPS request.
     try{
         const reqBody = await request.json();
         const {username, email, password} = reqBody;     //suggests we are extracting these variables from the body

         console.log(reqBody);

         //checks if user already exists
         const user = await User.findOne({email: String});
         if(user){
            return NextResponse.json({error:"User already exists"},{status:400})
         }

         //encrypt or hash the password by using bcrypt model
         const salt = await bcryptjs.genSalt(10);
         const hashedPassword = await bcryptjs.hash(password,salt);

         //after hashing , we are now going to create new user with the hashed password
         const newUser = new User({
            username,
            email,
            password: hashedPassword,
         })
        
         //now save this to the database
         const savedUser = await newUser.save();
         console.log(savedUser);

         return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

     }
     catch(error: any){
            return NextResponse.json({error: error.message},{status:500})      //this is how you send a response , use NextResponse , here the response is being sent in json format.
     }
}


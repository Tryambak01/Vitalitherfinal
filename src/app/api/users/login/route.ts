import {connect} from "@/dbConfig/dbConfig";  //importing connect function o establish mongoose from dbconfig
import User from "@/models/userModel";        //importing user from models
import {NextRequest, NextResponse} from "next/server";  //everything is dependent on request and response , you need to take something and give something
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;
        console.log(request.body);

        //check if user exists
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error:"User does not exist "},{status:400})
        }

        //check if password is correct
        const validPassword = await bcryptjs.compare(password,user.password);
        if(!validPassword){
            return NextResponse.json({error:"Wrong Password "},{status:400})
        }

        //if both the user exists and the password is correct , then we create a token (jsonwebtoken)

        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        //create token
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"})

        const response = NextResponse.json({                        //this response can access your cookies
            message:"Login successful",
            success:true
        })
         
        response.cookies.set("token",token,{httpOnly: true,}) //cookies have been set
        
        return response;

    } 
      catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}
 

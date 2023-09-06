import {NextRequest} from "next/server";

import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) =>{
    try {
        const token = request.cookies.get("token")?.value || '';                   //gets token from request made in @me
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);     //verifies token with token_secret and also extracts all information from the token
        return decodedToken.id;                                                    //returns id
    } catch (error:any) {
        throw new Error(error.message);
    }
}
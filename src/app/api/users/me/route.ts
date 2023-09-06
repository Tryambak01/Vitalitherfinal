import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request); //gets id from token
    const user = await User.findOne({ _id: userID }).select("-password"); //looks for user with that id

    return NextResponse.json({
      message: "User Found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request); //gets id from token
    // const user = await User.findOne({ _id: userID }).select("-password");
    const reqBody = await request.json();

    const user = await User.findOneAndUpdate(
      { _id: userID },
      { result: reqBody.result }
    );
    console.log(user); //looks for user with that id

    return NextResponse.json({
      message: "Result updated successfully",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

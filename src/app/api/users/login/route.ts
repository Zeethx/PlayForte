import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        const user = await User.findOne({email : email});

        if(!user){ 
            return NextResponse.json(
                {error: "User does not exist"},
                {status: 400}
            );
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);

        if(!isPasswordValid){
            return NextResponse.json(
                {error: "Invalid password"},
                {status: 400}
            );
        }

        const tokenPayload = {
            id: user._id,
            username: user.username,
        }

        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET!, {expiresIn: "1d"});

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            token
        });

        response.cookies.set("token", token, {
            httpOnly: true,
        });

        return response;

    } catch (error:any) {
        return NextResponse.json(
            {error: error.message},
            {status: 500}
        );
    }
}
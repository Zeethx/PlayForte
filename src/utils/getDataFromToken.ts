import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    const token = request.cookies.get("token")?.value || "";
    if (!token) return null;

    const decoded:any = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded.id;
};
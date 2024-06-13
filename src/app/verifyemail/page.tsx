'use client'
import React, { useState, useEffect, } from "react";
import axios from "axios";
import {toast} from "react-hot-toast";
import {useRouter} from "next/router";

export default function VerifyEmailPage() {

    const router = useRouter();

    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyEmail = async () => {
        try {
            const res = await axios.post("/api/users/verifyemail", {token});
            console.log(res.data);
            setVerified(true);
        } catch (error: any) {
            console.error(error);
            setError(true);
            if (error.response) {
                toast.error(error.response.data.error);
            } else {
                toast.error("An error occurred. Please try again.");
            }
        }
    }

    useEffect(() => {
        const token = router.query.token;
        if(token){
            setToken(token as string);
        }

    }, [router.query.token]);

    useEffect(() => {
        if(token.length > 0){
            verifyEmail();
        }
    }
    , [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950">
            <h1 className="text-2xl font-bold text-white mb-6">Verify Email</h1>
            {verified && <p className="text-green-500">Email verified successfully</p>}
            {error && <p className="text-red-500">An error occurred. Please try again.</p>}
        </div>
    )

}
'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

function SignupPage() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    const onSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post("/api/users/signup", user);
            console.log(res.data);
            setLoading(false);
            router.push("/login");
        } catch (error: any) {
            console.error(error);
            setLoading(false);
            if (error.response) {
                toast.error(error.response.data.error);
            } else {
                toast.error("An error occurred. Please try again.");
            }
        }
    };

    useEffect(() => {
        if (user.username && user.email && user.password) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [user]);

    if (!isClient) {
        return null; // Render nothing on the server
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950">
            <h1 className="text-2xl font-bold text-white mb-6">Signup</h1>
            <form onSubmit={onSignup} className="w-full max-w-xs">
                <input
                    className="w-full px-3 py-2 mb-4 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Username"
                    value={user.username}
                    onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                    }
                />
                <input
                    className="w-full px-3 py-2 mb-4 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                />
                <input
                    className="w-full px-3 py-2 mb-4 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                />
                <button
                    type="submit"
                    disabled={disabled}
                    className={`w-full px-4 py-2 font-bold rounded-lg ${
                        loading
                            ? "bg-gray-600"
                            : "bg-blue-600 hover:bg-blue-700"
                    } focus:outline-none focus:shadow-outline text-gray-200`}
                >
                    {loading ? "Loading..." : "Signup"}
                </button>
                <div className="flex justify-center w-full">
                    <Link
                        href="/login"
                        className="mt-4"
                    >
                        Already have an account? <span className="text-blue-500 ">Login</span>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default SignupPage;

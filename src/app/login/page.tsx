"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginPage() {
    const [user, setUser] = useState({
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

    const onLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post("/api/users/login", user);
            console.log(res.data);
            setLoading(false);
            router.push("/dashboard");
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
        if (user.email && user.password) {
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
            <h1 className="text-3xl font-bold text-white mb-6">Login</h1>
            <form onSubmit={onLogin} className="w-full max-w-xs space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    disabled={disabled}
                    className={`w-full px-4 py-2 rounded-md text-white font-semibold ${
                        disabled
                            ? "bg-gray-600"
                            : "bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    }`}
                >
                    {loading ? "Loading..." : "Login"}
                </button>
            </form>
            <Link href="/signup">
                <p className="mt-4">
                    Don't have an account? <span className="text-blue-400 hover:text-blue-300">Signup</span>
                </p>
            </Link>
        </div>
    );
}

export default LoginPage;

'use client'
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import React, { useState, useEffect } from "react";

function HeroSection() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="min-h-screen h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Explore the World of Music
                </h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto">
                    Embark on a musical journey with curated playlists. Discover
                    new genres, revisit old favorites, and let the music take
                    you away.
                </p>
                <div className="mt-4">
                    <Link href="/collections">
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                            borderClassName="bg-[radial-gradient(var(--white)_40%,transparent_60%)]"
                        >
                            Explore Collections
                        </Button>
                    </Link>
                </div>
            </div>
            {scrollPosition <= 0 && (
            <div className="absolute bottom-10 w-full text-center text-neutral-300 transition-all duration-300">
                <p>Unravel Your Melodic Adventure with a Scroll</p>
            </div>
            )}
        </div>
    );
}

export default HeroSection;

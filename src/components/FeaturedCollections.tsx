'use client'
import Link from "next/link";
import playlistData from "../data/playlists.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Playlist {
    id: number,
    title: string,
    slug: string,
    description: string,
    popularity: number,
    creator: string,
    isFeatured: boolean,
    image: string
    link: string
}


function FeaturedCollections() {
    const featuredPlaylists = playlistData.playlists.filter((playlist:Playlist) => playlist.isFeatured === true);

    return (
        <div className="py-12 flex flex-col justify-center items-center min-h-screen border-b-2 border-neutral-950">
            <div className="text-center">
                <h2 className="text-base font-extrabold tracking-wide text-teal-500 uppercase">
                    Featured Collections
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-light text-white sm:text-4xl">
                    Discover the epitome of quality.
                </p>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                    {featuredPlaylists.map((playlist:Playlist) => {
                            return (
                                <BackgroundGradient
                                className="flex flex-col rounded-[22px] bg-white dark:bg-slate-800 overflow-hidden h-full">
                                    <div className="relative">
                                        <img
                                            src={playlist.image}
                                            alt={playlist.title}
                                            className="w-full h-48 object-cover object-center"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold text-black dark:text-white">
                                            {playlist.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-neutral-300">
                                            {playlist.description}
                                        </p>
                                        <div className="mt-4">
                                            <Link
                                                href={`${playlist.link}`} target="_blank"
                                                className="text-teal-500 font-bold hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
                                            >
                                                Explore Collection
                                            </Link>
                                        </div>
                                    </div>
                            </BackgroundGradient>
                            );
                    }
                    )}
                </div>
            </div>
        </div>
    );
}

export default FeaturedCollections;

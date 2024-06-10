"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import playlistsData from "@/data/playlists.json";
import Link from "next/link";

function page() {
    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <h1 className="text-lg md:text-6xl text-center font-sans font-bold mb-8 text-white">
                {" "}
                All Playlists ({playlistsData.playlists.length})
            </h1>
            <div className="flex flex-wrap justify-center">
                {playlistsData.playlists.map((playlist) => (
                    <CardContainer className="inter-var mx-4 border-2 rounded-xl drop-shadow-lg">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-teal-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[28rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {playlist.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        {playlist.description}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src={playlist.image}
                          height="1000"
                          width="1000"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-20">
                        <CardItem
                          translateZ={20}
                          as={Link}
                          // TODO: make a new page that displays all the information about the playlist
                          href={`${playlist.link}`} 
                          target="__blank"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                          Check it out →
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          <a href={playlist.link} target="_blank">
                            Listen Now
                            </a>
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                ))}    
            </div>
        </div>
    );
}

export default page;

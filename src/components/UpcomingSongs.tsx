'use client';
import { HoverEffect } from "./ui/card-hover-effect";
function UpcomingSongs() {
    const songs = [
        {
          "title": "Bohemian Rhapsody",
          "description": "A rock opera song by Queen, known for its unique structure and eclectic style, blending rock, ballad, and opera elements.",
          "link": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
        },
        {
          "title": "Imagine",
          "description": "A song by John Lennon that envisions a world of peace and unity, often considered one of the greatest songs of all time.",
          "link": "https://www.youtube.com/watch?v=YkgkThdzX-8"
        },
        {
          "title": "Hotel California",
          "description": "A song by Eagles that tells a mysterious and haunting story set in a luxury hotel, featuring iconic guitar solos.",
          "link": "https://www.youtube.com/watch?v=EqPtz5qN7HM"
        },
        {
          "title": "Hey Jude",
          "description": "A song by The Beatles, written by Paul McCartney, offering comfort and encouragement to a friend going through a tough time.",
          "link": "https://www.youtube.com/watch?v=A_MjCqQoLLA"
        },
        {
          "title": "Stairway to Heaven",
          "description": "A song by Led Zeppelin, known for its progressive build-up and poetic lyrics, considered one of the greatest rock songs ever.",
          "link": "https://www.youtube.com/watch?v=QkF3oxziUI4"
        },
        {
          "title": "Like a Rolling Stone",
          "description": "A song by Bob Dylan that revolutionized rock music with its poetic lyrics and electric sound, addressing themes of alienation and resilience.",
          "link": "https://www.youtube.com/watch?v=IwOfCgkyEj0"
        }
      ]
      
    return (
        <div className="p-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base font-extrabold tracking-wide text-teal-500 uppercase">
                        Featured Music
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-light text-white sm:text-4xl">
                    Where Quality Meets Melody
                    </p>
                </div>
                <div>
                    <HoverEffect
                        items={songs.map((song) => ({
                            title: song.title,
                            description: song.description,
                            link: song.link
                        }))}
                    />

                </div>
            </div>
        </div>
    );
}

export default UpcomingSongs;

"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function ImportanceCards() {
    const items = [
        {
            quote: "Music can change the world because it can change people.",
            name: "Bono",
            title: "Lead Vocalist of U2",
        },
        {
            quote: "Where words fail, music speaks.",
            name: "Hans Christian Andersen",
            title: "Author",
        },
        {
            quote: "Without music, life would be a mistake.",
            name: "Friedrich Nietzsche",
            title: "Philosopher",
        },
        {
            quote: "One good thing about music, when it hits you, you feel no pain.",
            name: "Bob Marley",
            title: "Musician",
        },
        {
            quote: "Music is the universal language of mankind.",
            name: "Henry Wadsworth Longfellow",
            title: "Poet",
        },
        {
            quote: "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.",
            name: "Plato",
            title: "Philosopher",
        },
        {
            quote: "Music is the strongest form of magic.",
            name: "Marilyn Manson",
            title: "Musician",
        },
        {
            quote: "Music expresses that which cannot be said and on which it is impossible to be silent.",
            name: "Victor Hugo",
            title: "Writer",
        },
        {
            quote: "Life is one grand, sweet song, so start the music.",
            name: "Ronald Reagan",
            title: "40th U.S. President",
        },
        {
            quote: "Music is the divine way to tell beautiful, poetic things to the heart.",
            name: "Pablo Casals",
            title: "Cellist",
        },
    ];

    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.1] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-light text-white sm:text-4xl mb-8">
                The Timeless Influence of Music
            </h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={items}
                        direction="right"
                        speed="slow"
                        pauseOnHover={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default ImportanceCards;

'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"

function MeetOurCurators() {
    const curators = [
        {
            id: 1,
            name: "Raghav Anand",
            designation: "Sound Connoisseur",
            image: "/raghav-anand.png",
        },
        {
            id: 2,
            name: "Ronit Gujral",
            designation: "Beat Guru",
            image: "/ronit-gujral.jpeg",
        },
        {
            id: 3,
            name: "Maheepjot Singh",
            designation: "Rhythm Master",
            image: "/maheep_singh.png",
        }
    ]
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center min-h-screen">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full"
        waveWidth={70}
        speed="fast"
        >
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 pt-20">
                Meet Our Curators
            </h2>
            <p className="text-white text-center max-w-2xl">
            The talent behind your favorite playlists.
            </p>
            <div className="flex items-center justify-center mb-10 w-full mt-4">
                <AnimatedTooltip items={curators} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default MeetOurCurators
'use client'
import Image from 'next/image'
import { StickyScroll } from './ui/sticky-scroll-reveal'


function FeaturedArtists() {
    const featuredArtists = [
        {
          "title": "Taylor Swift",
          "description": "Taylor Swift is a global superstar known for her narrative songwriting and versatile music style. She consistently tops the charts with her albums and has a massive fan base worldwide. Her influence extends beyond music into fashion and culture.",
          "content": (
            <div className="h-full w-full flex items-center justify-center text-white">
              <Image
                src="/taylor-swift.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="Taylor Swift"
              />
            </div>
          )
        },
        {
          "title": "Drake",
          "description": "Drake, a Canadian rapper and singer, has dominated the music industry with his unique blend of hip-hop and R&B. Known for his catchy hooks and introspective lyrics, Drake has set numerous records on the Billboard charts.",
          "content": (
            <div className="h-full w-full flex items-center justify-center text-white">
              <Image
                src="/drake.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="Drake"
              />
            </div>
          )
        },
        {
          "title": "Beyoncé",
          "description": "Beyoncé is an iconic singer, songwriter, and performer known for her powerful voice and dynamic stage presence. With numerous Grammy Awards and groundbreaking albums, she continues to inspire and lead in the music industry.",
          "content": (
            <div className="h-full w-full flex items-center justify-center text-white">
              <Image
                src="/beyonce.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="Beyoncé"
              />
            </div>
          )
        },
        {
          "title": "Billie Eilish",
          "description": "Billie Eilish, a young sensation, has taken the world by storm with her unique sound and edgy style. Her innovative approach to music and her relatable lyrics have earned her a dedicated following and critical acclaim.",
          "content": (
            <div className="h-full w-full flex items-center justify-center text-white">
              <Image
                src="/billie-eilish.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="Billie Eilish"
              />
            </div>
          )
        },
        {
          "title": "Ed Sheeran",
          "description": "Ed Sheeran is a talented singer-songwriter known for his heartfelt lyrics and acoustic guitar skills. His ability to craft hit songs across various genres has made him a favorite among fans worldwide.",
          "content": (
            <div className="h-full w-full flex items-center justify-center text-white">
              <Image
                src="/ed-sheeran.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="Ed Sheeran"
              />
            </div>
          )
        }
      ]
      

  return (
    <div>
        <h1 className="text-base font-extrabold tracking-wide text-teal-500 uppercase text-center bg-slate-900 pt-10"> Featured Artists</h1>
        <p className="pt-2 text-3xl leading-8 font-extrabold tracking-light text-white sm:text-4xl bg-slate-900 text-center pb-4">
        Meet the Maestros of Music.
        </p>
        <StickyScroll content={featuredArtists} />
    </div>
  )
}

export default FeaturedArtists
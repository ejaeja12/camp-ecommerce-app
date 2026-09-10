import Image from "next/image"

import homeHero from "@/public/img/home-hero.webp"

export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full text-background">
      <Image
        src={homeHero}
        className="max-h-screen min-h-screen w-full object-cover object-[10%_50%] md:object-cover md:object-center"
        alt=""
        width={0}
        height={0}
      ></Image>

      <div className="absolute top-0 right-0 bottom-0 left-0 flex bg-slate-800/25 px-5 py-24 md:items-center md:px-24 md:py-0">
        <div className="flex w-full flex-col md:h-3/4 lg:h-2/3">
          <div className="flex w-full items-start justify-between py-5">
            <span className="font-hero-coord text-[.5rem] text-amber-500 md:text-[0.8rem]">
              27.988°S / 86.925°E · ELEV 4260M
            </span>
            <span className="font-hero-coord text-[.5rem] text-amber-500 md:text-[0.8rem]">
              {" "}
              BLUE HOUR · -8°C
            </span>
          </div>
          <span className="text-center font-hero text-4xl font-bold sm:text-5xl md:self-start md:text-7xl lg:text-8xl xl:text-9xl">
            EQUIP FOR
          </span>
          <span className="text-center font-hero text-4xl font-bold sm:text-5xl md:self-end md:text-7xl lg:text-8xl xl:text-9xl">
            THE UNKNOWN
          </span>
          <p className="h-fit w-full self-end text-center font-heading text-[.5rem] sm:text-[.7rem] md:w-4/6 md:text-right md:text-[.8rem] lg:text-[1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            sunt amet repellat ipsum tenetur corporis reprehenderit iste,
            dolorum veritatis! Debitis atque veniam tempora ex fugit aliquam
            dicta facilis doloribus itaque?
          </p>
        </div>
      </div>
    </section>
  )
}

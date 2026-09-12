import HomeHero from "./home-hero"
import HomeGear from "./home-gear"
import HomeBrand from "./home-brand"
import HomeCollection from "./home-collection"

export default function HomeContainer() {
  return (
    <main className="flex flex-col items-center">
      <HomeHero></HomeHero>

      {/* banner */}

      <section className="relative w-full overflow-clip bg-slate-200/5 p-0!">
        <span
          style={{ textBoxTrim: "trim-both", textBoxEdge: "cap alphabetic" }}
          className="block w-full p-0 font-hero text-[20rem] leading-none font-extrabold text-foreground/5"
        >
          CAMPYREZCAMPYREZCAMPYREZCAMPYREZ
        </span>
        <div className="absolute top-0 right-0 bottom-0 left-0 z-30 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-7 px-6 sm:w-2/3 sm:px-0 md:w-2/3 lg:w-1/2">
            <h1 className="text-xl font-bold md:text-4xl">
              Hi, We Are <span className="font-hero">CAMPYREZ</span>
            </h1>
            <span className="text-center text-[.8rem] md:text-[1rem] lg:text-[1.1rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident nam molestias earum quas suscipit quam, est nihil
              reprehenderit. Repellendus nisi sunt vitae iure officia
              voluptates. Dolores, ex ab. Dolor, debitis.
            </span>
          </div>
        </div>
      </section>

      {/* px-6 sm:px-24 lg:px-48 */}

      <div className="my-12 flex w-full flex-col gap-12 px-5 md:w-3/4 md:gap-32 md:px-0 lg:w-2/3">
        <HomeGear></HomeGear>
        <HomeBrand></HomeBrand>
        <HomeCollection></HomeCollection>
      </div>
    </main>
  )
}

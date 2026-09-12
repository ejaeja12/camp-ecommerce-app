import Link from "next/link"
import { Separator } from "../ui/separator"
import Image from "next/image"
import homeGearShoes from "@/public/img/gear/home-gear-shoes.webp"
import homeBrandEiger from "@/public/img/home-brand-eiger.png"

const gearItems = [
  {
    img: homeBrandEiger,
    label: "SHOES",
    url: "#",
  },
  {
    img: homeBrandEiger,
    label: "BAG",
    url: "#",
  },

  {
    img: homeBrandEiger,
    label: "NESTING",
    url: "#",
  },
]

export default function HomeBrand() {
  return (
    <section className="w-full">
      <h1 className="font-outfit text-3xl font-semibold md:text-4xl">Brand</h1>
      <Separator className="mt-2 mb-6" />
      <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-4">
        {gearItems.map((i, index) => (
          <Link href={i.url} key={index} className="">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={i.img}
                width={0}
                height={0}
                alt=""
                className="w-40 rounded-2xl"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

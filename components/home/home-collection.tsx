import { Card, CardContent } from "../ui/card"
import Link from "next/link"
import Image from "next/image"
import { Separator } from "../ui/separator"
import homeGearShoes from "@/public/img/gear/home-gear-shoes.webp"
import homeBrandEiger from "@/public/img/home-brand-eiger.png"

const collections = [
  {
    url: "#",
    img: homeGearShoes,
    price: 0,
    title: "Eiger Shoes For Outdoor",
    category: "shoes",
    brand: homeBrandEiger,
  },
  {
    url: "#",
    img: homeGearShoes,
    price: 0,
    title: "Eiger Shoes For Outdoor",
    category: "shoes",
    brand: homeBrandEiger,
  },
  {
    url: "#",
    img: homeGearShoes,
    price: 0,
    title: "Eiger Shoes For Outdoor",
    category: "shoes",
    brand: homeBrandEiger,
  },
  {
    url: "#",
    img: homeGearShoes,
    price: 0,
    title: "Eiger Shoes For Outdoor",
    category: "shoes",
    brand: homeBrandEiger,
  },
]

export default function HomeCollection() {
  return (
    <section className="w-full">
      <h1 className="font-outfit text-3xl font-semibold md:text-4xl">
        New Collection
      </h1>
      <Separator className="mt-2 mb-6" />
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-5">
        {collections.map((i, index) => (
          <Link href={i.url} key={index}>
            <Card className="pb-0">
              <CardContent className="px-2 md:px-3">
                <Image alt="" src={i.img} className="rounded-md" />
                <div className="flex flex-col justify-between gap-4 py-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[.8rem] font-bold md:text-lg">
                      {i.title}
                    </span>
                    <div className="flex justify-between">
                      <span className="text-[.7rem] font-semibold text-slate-800 md:text-[.9rem]">
                        {i.category}
                      </span>
                      {i.brand ? (
                        <Image
                          alt=""
                          src={i.brand}
                          className="h-6 w-6 object-cover md:h-10 md:w-10"
                        />
                      ) : (
                        <div className="h-10"></div>
                      )}
                    </div>
                  </div>
                  <span>${i.price}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

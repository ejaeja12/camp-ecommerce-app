import Link from "next/link"
import { Separator } from "./ui/separator"
import footerMountain from "@/public/img/footer-mountain.webp"
import Image from "next/image"

const navPage = [
  { url: "#", label: "Home" },
  { url: "#", label: "About" },
  { url: "#", label: "Shop" },
]

const navCategory = [
  { url: "#", label: "Tent" },
  { url: "#", label: "Nesting" },
  { url: "#", label: "Sleeping Bag" },
]

export default function PublicFooter() {
  return (
    <footer className="relative flex w-full flex-col items-center">
      <Image
        src={footerMountain}
        alt=" "
        className="h-120 w-full object-cover object-[20%_40%] sm:h-100 md:h-78"
      ></Image>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-end bg-taupe-700/70 p-5">
        <div className="flex w-full flex-col items-center justify-center gap-12 py-12 sm:w-2/3 sm:flex-row">
          <div className="flex flex-col gap-2 sm:px-0">
            <h1 className="font-bold text-yellow-500 sm:text-xl">CAMPYREZ</h1>
            <p className="font-hero text-[.9rem] text-background">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              perferendis quidem, incidunt nam temporibus aspernatur facere
              eaque voluptas quod suscipit libero tenetur repellendus explicabo
              dolor dolorem deleniti sapiente dolores officia!
            </p>
          </div>
          <div className="col-span-4 flex w-full justify-between gap-12 py-0 align-top sm:justify-around">
            <div className="flex flex-col gap-1 p-0">
              <h1 className="font-bold text-yellow-600 sm:text-sm">NAVIGASI</h1>
              {navPage.map((item, index) => (
                <Link
                  className="text-[.9rem] text-background"
                  key={index}
                  href={item.url}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-yellow-600 sm:text-sm">CATEGORY</h1>
              {navCategory.map((item, index) => (
                <Link
                  className="text-[.9rem] text-background"
                  key={index}
                  href={item.url}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full sm:w-2/3">
          <Separator className={"w-full"}></Separator>
          <p className="py-2 text-center text-[.9rem] text-background">
            Copyright © 2026 Campyrez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

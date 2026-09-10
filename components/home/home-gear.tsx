import { Tent, Backpack, CookingPot } from "lucide-react"
import Link from "next/link"
import { Separator } from "../ui/separator"

const gearItems = [
  {
    icon: <Tent className="h-8 w-8 md:h-24 md:w-24" />,
    label: "Storm-resistant shelter",
    url: "#",
  },
  {
    icon: <Backpack className="h-8 w-8 md:h-24 md:w-24" />,
    label: "Bag",
    url: "#",
  },

  {
    icon: <CookingPot className="h-8 w-8 md:h-24 md:w-24" />,
    label: "Nesting",
    url: "#",
  },
]

export default function HomeGear() {
  return (
    <section className="w-full px-6 py-12 sm:px-18 sm:py-24">
      <h1 className="font-hero text-5xl">Gear</h1>
      <Separator className="mt-5" />
      {/* <div className="mt-6 grid w-full sm:mt-12 sm:grid-cols-12 sm:justify-around sm:gap-4"></div> */}
      <div className="flex w-full flex-col sm:mt-12 sm:flex-row sm:justify-around">
        {gearItems.map((item, index) => (
          <div
            key={index}
            className="flex w-full justify-between border-b py-6 sm:border-none"
          >
            <Link
              href={item.url}

              className="flex w-full items-center gap-5 rounded-2xl duration-150 ease-in-out hover:bg-slate-800/10 sm:flex-col sm:py-4 sm:pl-0"
            >
              <div className="text-amber-600">{item.icon}</div>
              <span className="text-center text-[.8rem] sm:text-[.9rem]">
                {item.label}
              </span>
            </Link>
            {index !== gearItems.length - 1 && (
              <Separator
                orientation="vertical"
                className="mx-2 h-0 border sm:h-full"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const links = [
  { url: "/home", label: "Home" },
  { url: "/#", label: "About" },
  { url: "/#", label: "Shop" },
]

export default function NavHeader() {
  const [scrollPosition, setScrollPosition] = useState(false)
  useEffect(() => {
    function isScrolled() {
      setScrollPosition(window.scrollY > 0)
    }

    window.addEventListener("scroll", isScrolled)
  })
  return (
    <header
      className={`fixed w-full text-background transition-all duration-300 ease-in-out ${scrollPosition ? "bg-white text-foreground" : "bg-none"} z-50`}
    >
      <div className="flex w-full justify-between px-5 py-5 md:px-12">
        <span className="font-hero text-[.7rem] font-semibold md:text-[1rem]">
          CAMPYREZ
        </span>
        <nav className="flex gap-5">
          {links.map((link, index) => (
            <Link
              className="text-[.7rem] md:text-[1rem]"
              href={link.url}
              key={index}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

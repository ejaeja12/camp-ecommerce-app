import NavHeader from "@/components/nav-header"
import { cn } from "cn"
import { Instrument_Sans, JetBrains_Mono, Outfit } from "next/font/google"
import PublicFooter from "@/components/public-footer"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-hero",
})
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-hero-coord",
})
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className={` ${cn(instrumentSans.variable, jetBrainsMono.variable, outfit.variable)}`}
    >
      <NavHeader></NavHeader>
      {children}
      <PublicFooter></PublicFooter>
    </div>
  )
}

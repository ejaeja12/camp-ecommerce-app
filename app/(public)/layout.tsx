import NavHeader from "@/components/nav-header"
import { cn } from "cn"
import { Instrument_Sans, JetBrains_Mono } from "next/font/google"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-hero",
})
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-hero-coord",
})

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={` ${cn(instrumentSans.variable, jetBrainsMono.variable)}`}>
      <NavHeader></NavHeader>
      {children}
    </div>
  )
}

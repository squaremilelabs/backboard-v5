import "@/ui/theme/index.css"
import { Metadata } from "next"
import { ReactNode } from "react"
import { fontsClassName } from "@/ui/theme/fonts.loader"

export const metadata: Metadata = {}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontsClassName}>
      <body>{children}</body>
    </html>
  )
}

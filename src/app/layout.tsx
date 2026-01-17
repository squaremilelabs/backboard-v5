import "@/ui/theme/index.css"
import { Metadata } from "next"
import { ReactNode } from "react"
import { fontsClassName } from "@/ui/theme/fonts.loader"
import { cn } from "@/ui/utils/tailwind"

export const metadata: Metadata = {}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(
        fontsClassName,
        "box-border bg-base-bg font-sans text-md text-base-text outline-base-outline"
      )}
    >
      <body className="flex h-dvh max-h-dvh w-dvw max-w-dvw flex-col items-center-safe">
        {children}
      </body>
    </html>
  )
}

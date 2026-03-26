import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Mi Catálogo",
  description: "Catálogo visual de bookmarks por categorías",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
    title: "Kevin’s Collection",
    description: "A curated collection of free resources on the internet.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-neutral-50 text-neutral-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
        </body>
        </html>
    )
}
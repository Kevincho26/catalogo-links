import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
})

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["500", "600", "700", "800"],
    variable: "--font-heading",
})

export const metadata: Metadata = {
    title: "Kevin’s Collection",
    description: "A curated collection of free resources on the internet.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={`${geist.variable} ${manrope.variable}`}>
        <body className="bg-neutral-50 text-neutral-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
        </body>
        </html>
    )
}
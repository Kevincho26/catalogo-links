import type {Metadata} from "next"
import {NextIntlClientProvider, hasLocale} from "next-intl"
import {getMessages, setRequestLocale} from "next-intl/server"
import {notFound} from "next/navigation"
import {Geist, Manrope} from "next/font/google"
import {Analytics} from "@vercel/analytics/next"
import {routing} from "@/i18n/routing"
import "@/app/globals.css"
import {SiteHeader} from "@/components/site-header"

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
    title: "Kevin's Collection",
    description: "A curated collection of free resources on the internet.",
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}))
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode
    params: Promise<{locale: string}>
}) {
    const {locale} = await params

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    setRequestLocale(locale)
    const messages = await getMessages()

    return (
        <html
            lang={locale}
            data-scroll-behavior="smooth"
            className={`${geist.variable} ${manrope.variable}`}
        >
        <body className="bg-neutral-50 text-neutral-900 antialiased">
        <NextIntlClientProvider messages={messages}>
            <SiteHeader />
            <main>{children}</main>
            <Analytics />
        </NextIntlClientProvider>
        </body>
        </html>
    )
}
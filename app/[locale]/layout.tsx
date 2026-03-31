import type { ReactNode } from "react"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { getMessages, setRequestLocale } from "next-intl/server"

import { routing } from "@/i18n/routing"
import { SiteHeader } from "@/components/site-header"

import "../globals.css"

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    setRequestLocale(locale)

    const messages = await getMessages()

    return (
        <html lang={locale}>
        <body className="min-h-screen bg-[#f6f7f8] text-slate-950">
        <NextIntlClientProvider messages={messages}>
            <div className="min-h-screen">
                <SiteHeader />
                {children}
            </div>
        </NextIntlClientProvider>
        </body>
        </html>
    )
}
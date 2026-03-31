import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { categories } from "@/lib/data"
import { getLocalizedText } from "@/lib/get-localized-text"
import { CategoryPill } from "@/components/category-pill"
import { routing } from "@/i18n/routing"

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export default async function HomePage({
                                           params,
                                       }: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    setRequestLocale(locale)

    const t = await getTranslations("HomePage")

    return (
        <main className="pb-12 sm:pb-16">
            <section className="container-shell pt-8 sm:pt-10 lg:pt-12">
                <div className="surface-card overflow-hidden rounded-[32px]">
                    <div className="relative aspect-[4/5] w-full sm:aspect-[16/8] lg:aspect-[16/7]">
                        <Image
                            src="/heroes/home-banner.jpg"
                            alt={t("title")}
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/48 to-black/14" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-transparent to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 lg:p-12">
                            <div className="max-w-[520px] lg:max-w-[560px]">
                <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm sm:text-xs">
                  {t("eyebrow")}
                </span>

                                <h1
                                    className="mt-4 text-[2.4rem] font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-[3.2rem] lg:text-[4rem]"
                                    style={{ textShadow: "0 2px 12px rgba(0,0,0,0.28)" }}
                                >
                                    {t("title")}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-shell mt-10 sm:mt-12">
                <div className="mb-6 sm:mb-8">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <div className="section-divider flex-1" />

                        <div className="shrink-0 text-center">
                            <h2 className="text-[1.8rem] font-semibold tracking-[-0.02em] text-slate-950 sm:text-[2.2rem]">
                                {t("categoriesTitle")}
                            </h2>
                        </div>

                        <div className="section-divider flex-1" />
                    </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {categories.map((category) => (
                        <CategoryPill
                            key={category.slug}
                            href={`/categoria/${category.slug}`}
                            title={getLocalizedText(locale, category.name)}
                            description={getLocalizedText(locale, category.description)}
                            image={category.image}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}
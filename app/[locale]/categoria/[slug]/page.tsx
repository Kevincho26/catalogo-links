import Image from "next/image"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { Link } from "@/i18n/navigation"
import { categories, getBookmarksByCategory, getCategoryBySlug } from "@/lib/data"
import { routing } from "@/i18n/routing"
import { getLocalizedText } from "@/lib/get-localized-text"
import { CategoryBookmarksSection } from "@/components/category-bookmarks-section"

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        categories.map((category) => ({
            locale,
            slug: category.slug,
        })),
    )
}

export default async function CategoryPage({
                                               params,
                                           }: {
    params: Promise<{ locale: string; slug: string }>
}) {
    const { locale, slug } = await params
    setRequestLocale(locale)

    const t = await getTranslations("CategoryPage")
    const category = getCategoryBySlug(slug)

    if (!category) notFound()

    const items = getBookmarksByCategory(slug)

    const resourceItems = items
        .filter((bookmark) => bookmark.cardVariant === "resource")
        .map((bookmark) => ({
            id: bookmark.id,
            title: getLocalizedText(locale, bookmark.title),
            url: bookmark.url,
            description: getLocalizedText(locale, bookmark.description),
            tags: bookmark.tags ?? [],
            image: bookmark.image,
            availability: bookmark.availability,
            cardVariant: bookmark.cardVariant,
        }))

    const regularItems = items
        .filter((bookmark) => bookmark.cardVariant !== "resource")
        .map((bookmark) => ({
            id: bookmark.id,
            title: getLocalizedText(locale, bookmark.title),
            url: bookmark.url,
            description: getLocalizedText(locale, bookmark.description),
            tags: bookmark.tags ?? [],
            image: bookmark.image,
            availability: bookmark.availability,
            cardVariant: bookmark.cardVariant,
        }))

    const categoryName = getLocalizedText(locale, category.name)
    const categoryDescription = getLocalizedText(locale, category.description)

    const resourceTitle = locale === "es" ? "Recursos" : "Resources"
    const linksTitle = locale === "es" ? "Links" : "Links"
    const showMoreLabel =
        locale === "es" ? "Mostrar más recursos" : "Show more resources"
    const showLessLabel = locale === "es" ? "Mostrar menos" : "Show less"

    return (
        <main className="container-shell py-8 sm:py-10 lg:py-12">
            <Link
                href="/"
                className="mb-6 inline-flex rounded-full border border-black/10 bg-white px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
            >
                {t("back")}
            </Link>

            <header className="surface-card mb-8 overflow-hidden rounded-[32px]">
                {category.bannerImage ? (
                    <div className="relative aspect-[4/5] w-full sm:aspect-[16/8] lg:aspect-[16/7]">
                        <Image
                            src={category.bannerImage}
                            alt={categoryName}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/28 to-black/8" />

                        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-8">
                            <div className="max-w-2xl">
                                <p className="text-[11px] font-medium tracking-[0.08em] text-sky-200 sm:text-xs">
                                    {t("label")}
                                </p>

                                <h1 className="mt-2 text-[2.2rem] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-[3rem]">
                                    {categoryName}
                                </h1>

                                <p className="mt-3 max-w-[62ch] text-sm leading-7 text-white/88 sm:text-base">
                                    {categoryDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="p-6 sm:p-8">
                        <p className="eyebrow">{t("label")}</p>

                        <h1 className="mt-2 text-[2rem] font-bold leading-[1.04] tracking-[-0.03em] text-slate-950 sm:text-[2.6rem]">
                            {categoryName}
                        </h1>

                        <p className="mt-3 max-w-[62ch] text-base leading-8 text-slate-600">
                            {categoryDescription}
                        </p>
                    </div>
                )}
            </header>

            <CategoryBookmarksSection
                resourceTitle={resourceTitle}
                linksTitle={linksTitle}
                showMoreLabel={showMoreLabel}
                showLessLabel={showLessLabel}
                resources={resourceItems}
                bookmarks={regularItems}
            />
        </main>
    )
}
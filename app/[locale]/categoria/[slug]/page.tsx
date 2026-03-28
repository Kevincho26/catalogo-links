import Image from "next/image"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { BookmarkCard } from "@/components/bookmark-card"
import { categories, getBookmarksByCategory, getCategoryBySlug } from "@/lib/data"
import { routing } from "@/i18n/routing"
import { getLocalizedText } from "@/lib/get-localized-text"

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        categories.map((category) => ({
            locale,
            slug: category.slug,
        }))
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

    const categoryName = getLocalizedText(locale, category.name)
    const categoryDescription = getLocalizedText(locale, category.description)

    return (
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
            <Link
                href="/"
                className="mb-6 inline-flex rounded-full border border-black/10 bg-white px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100"
            >
                {t("back")}
            </Link>

            <header className="mb-8 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                {category.bannerImage && (
                    <div className="relative aspect-[4/5] w-full sm:aspect-[16/8] lg:aspect-[16/7]">
                        <Image
                            src={category.bannerImage}
                            alt={categoryName}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
                            <div className="flex max-w-xl flex-col items-start gap-2">
                <span
                    className="rounded-full border border-white/10 bg-black/20 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm sm:text-xs"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
                >
                  {t("label")}
                </span>

                                <h1
                                    className="font-heading text-3xl font-semibold tracking-tight text-white md:text-5xl"
                                    style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}
                                >
                  <span className="box-decoration-clone rounded-lg bg-black/18 px-2.5 py-1 backdrop-blur-sm">
                    {categoryName}
                  </span>
                                </h1>

                                <p
                                    className="max-w-lg text-sm leading-7 text-white/90 md:text-base"
                                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
                                >
                  <span className="box-decoration-clone rounded-lg bg-black/16 px-2.5 py-1.5 backdrop-blur-sm">
                    {categoryDescription}
                  </span>
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {!category.bannerImage && (
                    <div className="p-6 sm:p-8">
                        <p className="text-sm uppercase tracking-[0.14em] text-neutral-500">
                            {t("label")}
                        </p>
                        <h1 className="font-heading mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                            {categoryName}
                        </h1>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">
                            {categoryDescription}
                        </p>
                    </div>
                )}
            </header>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((bookmark) => (
                    <BookmarkCard
                        key={bookmark.id}
                        title={getLocalizedText(locale, bookmark.title)}
                        url={bookmark.url}
                        description={getLocalizedText(locale, bookmark.description)}
                        tags={bookmark.tags}
                        image={bookmark.image}
                    />
                ))}
            </section>
        </div>
    )
}
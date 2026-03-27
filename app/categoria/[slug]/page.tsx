import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BookmarkCard } from "@/components/bookmark-card"
import { categories, getBookmarksByCategory, getCategoryBySlug } from "@/lib/data"

export function generateStaticParams() {
    return categories.map((category) => ({
        slug: category.slug,
    }))
}

export default async function CategoryPage({
                                               params,
                                           }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const category = getCategoryBySlug(slug)

    if (!category) notFound()

    const items = getBookmarksByCategory(slug)

    return (
        <div className="mx-auto max-w-6xl px-6 py-12">
            <Link
                href="/"
                className="mb-6 inline-flex rounded-full border border-black/10 bg-white px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100"
            >
                Volver al inicio
            </Link>

            <header className="mb-8 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                {category.bannerImage && (
                    <div className="relative aspect-[16/7] w-full">
                        <Image
                            src={category.bannerImage}
                            alt={category.name}
                            fill
                            className="object-cover"
                            priority
                            sizes="(min-width: 1024px) 1152px, 100vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
                            <div className="max-w-2xl rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-md sm:p-5 md:p-6">
                                <p
                                    className="text-xs uppercase tracking-[0.14em] text-white/80 sm:text-sm"
                                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
                                >
                                    Category
                                </p>

                                <h1
                                    className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-5xl"
                                    style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}
                                >
                                    {category.name}
                                </h1>

                                <p
                                    className="mt-3 max-w-2xl text-sm leading-7 text-white/90 md:text-base"
                                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
                                >
                                    {category.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {!category.bannerImage && (
                    <div className="p-8">
                        <p className="text-sm uppercase tracking-[0.14em] text-neutral-500">
                            Categoría
                        </p>
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
                            {category.name}
                        </h1>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">
                            {category.description}
                        </p>
                    </div>
                )}
            </header>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map((bookmark) => (
                    <BookmarkCard key={bookmark.id} bookmark={bookmark} />
                ))}
            </section>
        </div>
    )
}
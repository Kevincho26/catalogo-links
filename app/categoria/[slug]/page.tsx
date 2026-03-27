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
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
            <Link
                href="/"
                className="mb-6 inline-flex rounded-full border border-black/10 bg-white px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100"
            >
                Back to home
            </Link>

            <header className="mb-8 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                {category.bannerImage && (
                    <div className="relative aspect-[4/5] w-full sm:aspect-[16/8] lg:aspect-[16/7]">
                        <Image
                            src={category.bannerImage}
                            alt={category.name}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
                            <div className="flex max-w-2xl flex-col items-start gap-3">
                <span
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm sm:text-sm"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
                >
                  Category
                </span>

                                <h1
                                    className="text-3xl font-semibold tracking-tight text-white md:text-5xl"
                                    style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}
                                >
                  <span className="box-decoration-clone rounded-xl bg-black/18 px-3 py-1.5 backdrop-blur-sm">
                    {category.name}
                  </span>
                                </h1>

                                <p
                                    className="max-w-2xl text-sm leading-7 text-white/90 md:text-base"
                                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
                                >
                  <span className="box-decoration-clone rounded-xl bg-black/16 px-3 py-2 backdrop-blur-sm">
                    {category.description}
                  </span>
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {!category.bannerImage && (
                    <div className="p-6 sm:p-8">
                        <p className="text-sm uppercase tracking-[0.14em] text-neutral-500">
                            Category
                        </p>
                        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                            {category.name}
                        </h1>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">
                            {category.description}
                        </p>
                    </div>
                )}
            </header>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((bookmark) => (
                    <BookmarkCard key={bookmark.id} bookmark={bookmark} />
                ))}
            </section>
        </div>
    )
}
import Image from "next/image"
import { BookmarkCard } from "@/components/bookmark-card"
import { CategoryPill } from "@/components/category-pill"
import { categories, getFeaturedBookmarks } from "@/lib/data"

export default function HomePage() {
    const featured = getFeaturedBookmarks()

    return (
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
            <section className="mb-10 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm sm:mb-12 sm:rounded-3xl">
                <div className="relative aspect-[4/5] w-full sm:aspect-[16/8] lg:aspect-[21/6]">
                    <Image
                        src="/heroes/home-banner.jpg"
                        alt="Home banner"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        style={{ objectPosition: "70% center" }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/45 sm:to-black/10" />

                    <div className="absolute inset-0 flex items-end sm:items-center">
                        <div className="w-full px-4 pb-5 sm:px-6 sm:pb-0 md:px-8">
                            <div className="max-w-full sm:max-w-lg lg:max-w-xl">
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/85 backdrop-blur sm:text-xs">
                  Digital Library
                </span>

                                <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">
                                    Collection of Free Resources
                                </h1>

                                <p className="mt-3 text-sm leading-6 text-white/90 sm:mt-4 sm:text-base sm:leading-7">
                                    A curated collection of the best free resources on the internet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-10 sm:mb-14">
                <div className="mb-4 flex items-center justify-between sm:mb-5">
                    <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        Categories
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <CategoryPill key={category.slug} category={category} />
                    ))}
                </div>
            </section>

            <section>
                <div className="mb-4 flex items-center justify-between sm:mb-5">
                    <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        Featured
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {featured.map((bookmark) => (
                        <BookmarkCard key={bookmark.id} bookmark={bookmark} />
                    ))}
                </div>
            </section>
        </div>
    )
}
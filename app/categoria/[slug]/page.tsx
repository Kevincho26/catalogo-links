import Image from "next/image"
import { BookmarkCard } from "@/components/bookmark-card"
import { CategoryPill } from "@/components/category-pill"
import { categories, getFeaturedBookmarks } from "@/lib/data"

export default function HomePage() {
    const featured = getFeaturedBookmarks()

    return (
        <div className="mx-auto max-w-6xl px-6 py-12">
            <section className="mb-12 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                <div className="relative aspect-[21/6] w-full">
                    <Image
                        src="/heroes/home-banner.jpg"
                        alt="Banner principal"
                        fill
                        priority
                        className="object-cover"
                        sizes="(min-width: 1024px) 1152px, 100vw"
                    />

                    <div className="absolute inset-0 bg-black/35" />

                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/85 backdrop-blur">
              Biblioteca personal
            </span>

                        <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
                            Un catálogo online para guardar, abrir y compartir tus sitios favoritos
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90 md:text-base">
                            Organiza tus bookmarks por categorías y accede a ellos desde cualquier lugar
                            con una interfaz limpia, rápida y visual.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-14">
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold tracking-tight">Categorías</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {categories.map((category) => (
                        <CategoryPill key={category.slug} category={category} />
                    ))}
                </div>
            </section>

            <section>
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold tracking-tight">Destacados</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {featured.map((bookmark) => (
                        <BookmarkCard key={bookmark.id} bookmark={bookmark} />
                    ))}
                </div>
            </section>
        </div>
    )
}
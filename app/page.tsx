import { BookmarkCard } from "@/components/bookmark-card"
import { CategoryPill } from "@/components/category-pill"
import { categories, getFeaturedBookmarks } from "@/lib/data"

export default function HomePage() {
  const featured = getFeaturedBookmarks()

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-12">
        <span className="mb-4 inline-block rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-600">
          Biblioteca personal
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Un catálogo online para guardar, abrir y compartir tus sitios favoritos
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
          Organiza tus bookmarks por categorías y compártelos desde cualquier lugar
          con una interfaz limpia, rápida y visual.
        </p>
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

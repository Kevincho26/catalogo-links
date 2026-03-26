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

      <header className="mb-8">
        <p className="text-sm uppercase tracking-[0.14em] text-neutral-500">
          Categoría
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          {category.name}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">
          {category.description}
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((bookmark) => (
          <BookmarkCard key={bookmark.id} bookmark={bookmark} />
        ))}
      </section>
    </div>
  )
}

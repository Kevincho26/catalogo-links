import Link from "next/link"
import type { Category } from "@/lib/types"

export function CategoryPill({ category }: { category: Category }) {
  return (
    <Link
      href={`/categoria/${category.slug}`}
      className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="mb-2 text-base font-semibold text-neutral-900 group-hover:text-black">
        {category.name}
      </div>
      <p className="text-sm leading-6 text-neutral-600">
        {category.description}
      </p>
    </Link>
  )
}

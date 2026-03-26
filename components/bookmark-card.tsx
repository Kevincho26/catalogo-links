import { ExternalLink } from "lucide-react"
import type { Bookmark } from "@/lib/types"

export function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  const hostname = new URL(bookmark.url).hostname.replace("www.", "")

  return (
    <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
            {hostname}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-neutral-900">
            {bookmark.title}
          </h3>
        </div>
      </div>

      <p className="mb-4 text-sm leading-6 text-neutral-600">
        {bookmark.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {bookmark.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700"
          >
            #{tag}
          </span>
        ))}
      </div>

      <a
        href={bookmark.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
      >
        Abrir sitio
        <ExternalLink className="h-4 w-4" />
      </a>
    </article>
  )
}

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import type { Bookmark } from "@/lib/types"

export function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
    const hostname = new URL(bookmark.url).hostname.replace("www.", "")

    return (
        <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            {bookmark.image && (
                <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                    <Image
                        src={bookmark.image}
                        alt={bookmark.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                </div>
            )}

            <div className="p-4 sm:p-5">
                <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 sm:text-xs">
                            {hostname}
                        </p>
                        <h3 className="mt-1 text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">
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
                            className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] text-neutral-700 sm:text-xs"
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
                    Open site
                    <ExternalLink className="h-4 w-4" />
                </a>
            </div>
        </article>
    )
}
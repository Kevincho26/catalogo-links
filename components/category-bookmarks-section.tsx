"use client"

import { useMemo, useState } from "react"

import { BookmarkCard } from "@/components/bookmark-card"
import type { Availability, BookmarkCardVariant } from "@/lib/types"

type CardItem = {
    id: string
    title: string
    url: string
    description: string
    tags: string[]
    image?: string
    availability?: Availability
    cardVariant?: BookmarkCardVariant
}

type CategoryBookmarksSectionProps = {
    resourceTitle: string
    linksTitle: string
    showMoreLabel: string
    showLessLabel: string
    resources: CardItem[]
    bookmarks: CardItem[]
}

export function CategoryBookmarksSection({
                                             resourceTitle,
                                             linksTitle,
                                             showMoreLabel,
                                             showLessLabel,
                                             resources,
                                             bookmarks,
                                         }: CategoryBookmarksSectionProps) {
    const [expandedResources, setExpandedResources] = useState(false)

    const hasMoreResources = resources.length > 2

    const visibleResources = useMemo(() => {
        return expandedResources ? resources : resources.slice(0, 2)
    }, [expandedResources, resources])

    return (
        <>
            {resources.length > 0 && (
                <>
                    <div className="mb-6 sm:mb-8">
                        <div className="flex items-center gap-4 sm:gap-6">
                            <div className="section-divider flex-1" />

                            <div className="shrink-0 text-center">
                                <h2 className="text-[1.65rem] font-semibold tracking-[-0.02em] text-slate-950 sm:text-[2rem]">
                                    {resourceTitle}
                                </h2>
                            </div>

                            <div className="section-divider flex-1" />
                        </div>
                    </div>

                    <section className="w-full">
                        <div className="grid gap-5 md:grid-cols-2">
                            {visibleResources.map((bookmark) => (
                                <BookmarkCard
                                    key={bookmark.id}
                                    title={bookmark.title}
                                    url={bookmark.url}
                                    description={bookmark.description}
                                    tags={bookmark.tags ?? []}
                                    image={bookmark.image}
                                    availability={bookmark.availability}
                                    cardVariant={bookmark.cardVariant}
                                />
                            ))}
                        </div>

                        {hasMoreResources && (
                            <div className="mt-5 flex justify-center">
                                <button
                                    type="button"
                                    onClick={() => setExpandedResources((prev) => !prev)}
                                    className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-black/15 hover:bg-slate-50"
                                >
                                    {expandedResources ? showLessLabel : showMoreLabel}
                                </button>
                            </div>
                        )}
                    </section>
                </>
            )}

            {bookmarks.length > 0 && (
                <>
                    <div className="my-8 sm:my-10">
                        <div className="flex items-center gap-4 sm:gap-6">
                            <div className="section-divider flex-1" />

                            <div className="shrink-0 text-center">
                                <h2 className="text-[1.65rem] font-semibold tracking-[-0.02em] text-slate-950 sm:text-[2rem]">
                                    {linksTitle}
                                </h2>
                            </div>

                            <div className="section-divider flex-1" />
                        </div>
                    </div>

                    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {bookmarks.map((bookmark, index) => (
                            <BookmarkCard
                                key={bookmark.id}
                                displayNumber={index + 1}
                                title={bookmark.title}
                                url={bookmark.url}
                                description={bookmark.description}
                                tags={bookmark.tags ?? []}
                                image={bookmark.image}
                                availability={bookmark.availability}
                                cardVariant={bookmark.cardVariant}
                            />
                        ))}
                    </section>
                </>
            )}
        </>
    )
}
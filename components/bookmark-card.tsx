import Image from "next/image"

import { getAvailabilityBadge } from "@/lib/get-availability-badge"
import type { Availability, BookmarkCardVariant } from "@/lib/types"

type BookmarkCardProps = {
    displayNumber?: number
    title: string
    url: string
    description: string
    tags?: string[]
    image?: string
    availability?: Availability
    cardVariant?: BookmarkCardVariant
}

function getHostname(url: string) {
    try {
        return new URL(url).hostname.replace("www.", "").toLowerCase()
    } catch {
        return url.toLowerCase()
    }
}

const defaultCardClass =
    "surface-card surface-card-hover group block overflow-hidden rounded-[24px] focus:outline-none focus:ring-2 focus:ring-black/10"

const resourceCardClass =
    "surface-card surface-card-hover group block overflow-hidden rounded-none focus:outline-none focus:ring-2 focus:ring-black/10"

export function BookmarkCard({
                                 displayNumber,
                                 title,
                                 url,
                                 description,
                                 tags = [],
                                 image,
                                 availability,
                                 cardVariant = "default",
                             }: BookmarkCardProps) {
    const hostname = getHostname(url)
    const badge = getAvailabilityBadge(availability)

    if (cardVariant === "resource") {
        return (
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${title}`}
                className={resourceCardClass}
            >
                <div className="flex h-[140px] items-stretch sm:h-[152px] md:h-[164px]">
                    {image && (
                        <div className="relative h-full aspect-video shrink-0 overflow-hidden border-r border-black/10">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover transition duration-300 group-hover:scale-[1.02]"
                                sizes="(min-width: 768px) 292px, (min-width: 640px) 270px, 249px"
                            />
                        </div>
                    )}

                    <div className="flex flex-1 items-center p-5 sm:p-6">
                        <div>
                            <p className="text-[11px] font-medium tracking-[0.04em] text-sky-700 sm:text-xs">
                                {hostname}
                            </p>

                            <h3 className="mt-2 text-[1.2rem] font-semibold leading-[1.15] tracking-[-0.02em] text-slate-950 sm:text-[1.35rem]">
                                {title}
                            </h3>

                            <p className="mt-2.5 max-w-[62ch] text-sm leading-6 text-slate-600 sm:text-[15px]">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        )
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${title}`}
            className={[
                defaultCardClass,
                badge ? badge.borderClass : "border-black/10",
            ].join(" ")}
        >
            {image && (
                <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                        sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />

                    {badge && typeof displayNumber === "number" && (
                        <>
                            <div className="absolute left-2 top-2 z-10">
                <span
                    className={[
                        "inline-flex min-w-[2.2rem] items-center justify-center rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] shadow-sm backdrop-blur-md",
                        badge.badgeClass,
                    ].join(" ")}
                >
                  {displayNumber}
                </span>
                            </div>

                            <div className="absolute right-2 top-2 z-10">
                <span
                    className={[
                        "inline-flex rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] shadow-sm backdrop-blur-md",
                        badge.badgeClass,
                    ].join(" ")}
                >
                  {badge.label}
                </span>
                            </div>
                        </>
                    )}
                </div>
            )}

            <div className="p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <p className="text-[11px] font-medium tracking-[0.04em] text-sky-700 sm:text-xs">
                            {hostname}
                        </p>

                        <h3 className="mt-1.5 text-[1.06rem] font-semibold leading-[1.2] tracking-[-0.015em] text-slate-950 sm:text-[1.15rem]">
                            {title}
                        </h3>
                    </div>

                    {!image && badge && typeof displayNumber === "number" && (
                        <div className="flex items-center gap-2">
              <span
                  className={[
                      "inline-flex min-w-[2.2rem] items-center justify-center rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] shadow-sm backdrop-blur-md",
                      badge.badgeClass,
                  ].join(" ")}
              >
                {displayNumber}
              </span>

                            <span
                                className={[
                                    "inline-flex shrink-0 rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] shadow-sm backdrop-blur-md",
                                    badge.badgeClass,
                                ].join(" ")}
                            >
                {badge.label}
              </span>
                        </div>
                    )}
                </div>

                <p className="mb-4 text-sm leading-6 text-slate-600">{description}</p>

                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-700 sm:text-xs"
                            >
                #{tag}
              </span>
                        ))}
                    </div>
                )}
            </div>
        </a>
    )
}
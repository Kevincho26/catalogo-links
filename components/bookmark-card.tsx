import Image from "next/image"

export function BookmarkCard({
                                 title,
                                 url,
                                 description,
                                 tags,
                                 image,
                             }: {
    title: string
    url: string
    description: string
    tags: string[]
    image?: string
}) {
    const hostname = new URL(url).hostname.replace("www.", "")

    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${title}`}
            className="group block overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/20"
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
                </div>
            )}

            <div className="p-4 sm:p-5">
                <div className="mb-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 sm:text-xs">
                        {hostname}
                    </p>
                    <h3 className="font-heading mt-1 text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">
                        {title}
                    </h3>
                </div>

                <p className="mb-4 text-sm leading-6 text-neutral-600">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] text-neutral-700 sm:text-xs"
                        >
              #{tag}
            </span>
                    ))}
                </div>
            </div>
        </a>
    )
}
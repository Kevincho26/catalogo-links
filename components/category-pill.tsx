import Image from "next/image"

import { Link } from "@/i18n/navigation"

type CategoryPillProps = {
    href: string
    title: string
    description: string
    image?: string
}

export function CategoryPill({
                                 href,
                                 title,
                                 description,
                                 image,
                             }: CategoryPillProps) {
    return (
        <Link
            href={href}
            className="surface-card surface-card-hover group block overflow-hidden rounded-[24px]"
        >
            <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                        sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                ) : (
                    <div className="h-full w-full bg-slate-100" />
                )}
            </div>

            <div className="p-5 sm:p-6">
                <p className="eyebrow">Category</p>
                <h3 className="mt-2 text-[1.2rem] font-semibold tracking-[-0.018em] text-slate-950">
                    {title}
                </h3>
                <p className="mt-2 body-copy-tight">{description}</p>
            </div>
        </Link>
    )
}
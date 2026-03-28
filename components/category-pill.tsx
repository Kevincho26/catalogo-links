import Image from "next/image"
import {Link} from "@/i18n/navigation"

export function CategoryPill({
                                 slug,
                                 name,
                                 description,
                                 image,
                             }: {
    slug: string
    name: string
    description: string
    image?: string
}) {
    return (
        <Link
            href={`/categoria/${slug}`}
            className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
            {image && (
                <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
            )}

            <div className="p-4 sm:p-5">
                <div className="mb-2 font-heading text-base font-semibold text-neutral-900 group-hover:text-black">
                    {name}
                </div>
                <p className="text-sm leading-6 text-neutral-600">{description}</p>
            </div>
        </Link>
    )
}
import Image from "next/image"
import Link from "next/link"
import type { Category } from "@/lib/types"

export function CategoryPill({ category }: { category: Category }) {
    return (
        <Link
            href={`/categoria/${category.slug}`}
            className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
            {category.image && (
                <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                    <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
            )}

            <div className="p-4 sm:p-5">
                <div className="mb-2 text-base font-semibold text-neutral-900 group-hover:text-black">
                    {category.name}
                </div>
                <p className="text-sm leading-6 text-neutral-600">
                    {category.description}
                </p>
            </div>
        </Link>
    )
}
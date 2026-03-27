import Image from "next/image"
import Link from "next/link"
import type { Category } from "@/lib/types"

export function CategoryPill({ category }: { category: Category }) {
    return (
        <Link
            href={`/categoria/${category.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                        <div className="max-w-[85%] rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/80 sm:text-xs">
                                Category
                            </p>

                            <h3
                                className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl"
                                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.45)" }}
                            >
                                {category.name}
                            </h3>

                            <p
                                className="mt-2 text-sm leading-6 text-white/90"
                                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
                            >
                                {category.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {!category.image && (
                <div className="p-4 sm:p-5">
                    <div className="mb-2 text-base font-semibold text-neutral-900">
                        {category.name}
                    </div>
                    <p className="text-sm leading-6 text-neutral-600">
                        {category.description}
                    </p>
                </div>
            )}
        </Link>
    )
}
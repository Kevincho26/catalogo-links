"use client"

import {useLocale} from "next-intl"
import {usePathname, useRouter} from "@/i18n/navigation"
import type {AppLocale} from "@/i18n/routing"

const locales: AppLocale[] = ["en", "es"]

export function LanguageSwitcher() {
    const locale = useLocale() as AppLocale
    const pathname = usePathname()
    const router = useRouter()

    function onChange(nextLocale: AppLocale) {
        router.replace(pathname, {locale: nextLocale})
    }

    return (
        <div className="inline-flex rounded-full border border-black/10 bg-white p-1 shadow-sm">
            {locales.map((item) => {
                const active = locale === item

                return (
                    <button
                        key={item}
                        type="button"
                        onClick={() => onChange(item)}
                        className={[
                            "rounded-full px-3 py-1.5 text-xs font-semibold transition sm:text-sm",
                            active
                                ? "bg-neutral-900 text-white"
                                : "text-neutral-600 hover:bg-neutral-100",
                        ].join(" ")}
                        aria-pressed={active}
                    >
                        {item.toUpperCase()}
                    </button>
                )
            })}
        </div>
    )
}
import { getTranslations } from "next-intl/server"

import { Link } from "@/i18n/navigation"
import { LanguageSwitcher } from "@/components/language-switcher"

export async function SiteHeader() {
    const t = await getTranslations("Header")

    return (
        <header className="border-b border-black/8 bg-white/90 backdrop-blur-md">
            <div className="container-shell flex min-h-[72px] items-center justify-between gap-4">
                <Link href="/" className="min-w-0">
                    <div className="flex flex-col">
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-sky-700">
              {t("eyebrow")}
            </span>
                        <span className="truncate text-lg font-semibold tracking-[-0.02em] text-slate-950 sm:text-xl">
              {t("title")}
            </span>
                    </div>
                </Link>

                <div className="shrink-0">
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    )
}
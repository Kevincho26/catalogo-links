import {getTranslations} from "next-intl/server"
import {Link} from "@/i18n/navigation"
import {LanguageSwitcher} from "@/components/language-switcher"

export async function SiteHeader() {
    const t = await getTranslations("Header")

    return (
        <header className="border-b border-black/10 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
                <Link href="/" className="font-heading text-base font-semibold tracking-tight sm:text-lg">
                    {t("brand")}
                </Link>

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-black/10 px-3 py-1.5 text-sm text-neutral-600 transition hover:bg-neutral-100"
                    >
                        {t("github")}
                    </a>

                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    )
}
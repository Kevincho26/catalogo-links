import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Mi Catálogo
        </Link>

        <nav className="flex items-center gap-3 text-sm text-neutral-600">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/10 px-3 py-1.5 transition hover:bg-neutral-100"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}

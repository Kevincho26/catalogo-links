import type { LocalizedText } from "./types"

export function getLocalizedText(locale: string, text: LocalizedText) {
    return locale === "es" ? text.es : text.en
}
import type { Availability } from "./types"

type AvailabilityBadge = {
    label: string
    borderClass: string
    badgeClass: string
}

const availabilityMap: Record<Availability, AvailabilityBadge> = {
    en: {
        label: "EN",
        borderClass: "border-sky-300",
        badgeClass: "border-sky-300 text-sky-700",
    },
    es: {
        label: "ES",
        borderClass: "border-orange-300",
        badgeClass: "border-orange-300 text-orange-700",
    },
    "en-es": {
        label: "EN/ES",
        borderClass: "border-emerald-300",
        badgeClass: "border-emerald-300 text-emerald-700",
    },
    sub: {
        label: "SUB",
        borderClass: "border-sky-300",
        badgeClass: "border-sky-300 text-sky-700",
    },
    dub: {
        label: "DUB",
        borderClass: "border-orange-300",
        badgeClass: "border-orange-300 text-orange-700",
    },
    "dub-sub": {
        label: "DUB/SUB",
        borderClass: "border-emerald-300",
        badgeClass: "border-emerald-300 text-emerald-700",
    },
}

export function getAvailabilityBadge(availability?: Availability) {
    if (!availability) return null
    return availabilityMap[availability]
}
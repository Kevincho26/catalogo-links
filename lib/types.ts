export type LocalizedText = {
  en: string
  es: string
}

export type Category = {
  slug: string
  name: LocalizedText
  description: LocalizedText
  bannerImage?: string
  image?: string
}

export type Bookmark = {
  id: string
  title: LocalizedText
  url: string
  description: LocalizedText
  category: string
  tags: string[]
  featured?: boolean
  image?: string
}
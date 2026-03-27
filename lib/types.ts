export type Category = {
  slug: string
  name: string
  description: string
  bannerImage?: string
  image?: string
}

export type Bookmark = {
  id: string
  title: string
  url: string
  description: string
  category: string
  tags: string[]
  featured?: boolean
  image?: string
}
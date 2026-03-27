export type Category = {
  slug: string
  name: string
  description: string
  bannerImage?: string
}

export type Bookmark = {
  id: string
  title: string
  url: string
  description: string
  category: string
  tags: string[]
  featured?: boolean
}

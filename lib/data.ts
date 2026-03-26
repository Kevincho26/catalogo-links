import type { Bookmark, Category } from "./types"

export const categories: Category[] = [
  {
    slug: "sports",
    name: "Sports",
    description: "High quality sport streams: football, basketball, tennis, F1, etc",
  },
  {
    slug: "movies-&-tv-shows",
    name: "Movies & TV Shows",
    description: "High quality movies and TV show streaming servers, SUB and DUB options.",
  },
  {
    slug: "anime",
    name: "Anime",
    description: "High quality anime streaming servers, SUB and DUB options.",
  },
]

export const bookmarks: Bookmark[] = [
  {
    id: "1",
    title: "StreamSports99",
    url: "https://streamsports99.ru",
    description: "High quality sport streams from different countries",
    category: "sports",
    tags: ["sports", "football", "basketball", "tennis", "racing"],
    featured: true,
  },
  {
    id: "2",
    title: "NTV.cx",
    url: "https://ntv.cx",
    description: "High quality sport streams mainly in English",
    category: "sports",
    tags: ["sports", "football", "basketball", "tennis", "racing"],
    featured: true,
  },
  {
    id: "3",
    title: "Daddylive",
    url: "https://dlstreams.top",
    description: "High quality sport streams from different countries",
    category: "sports",
    tags: ["sports", "football", "basketball", "tennis", "racing"],
    featured: true,
  },
  {
    id: "4",
    title: "Cinemacity",
    url: "https://cinemacity.cc",
    description: "High quality movies, TV shows and anime streaming servers [DUB & SUB]",
    category: "movies & tv shows",
    tags: ["movies", "tv shows", "anime"],
  },
  {
    id: "5",
    title: "Showbox",
    url: "https://www.showbox.media/",
    description: "High quality movies, TV shows streaming servers [SUB]",
    category: "movies-&-tv-shows",
    tags: ["movies", "tv shows"],
    featured: true,
  },
  {
    id: "6",
    title: "Uniquestream",
    url: "https://anime.uniquestream.net/",
    description: "High quality anime streaming servers [DUB & SUB]",
    category: "anime",
    tags: ["anime"],
  },
]

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function getBookmarksByCategory(slug: string) {
  return bookmarks.filter((bookmark) => bookmark.category === slug)
}

export function getFeaturedBookmarks() {
  return bookmarks.filter((bookmark) => bookmark.featured)
}

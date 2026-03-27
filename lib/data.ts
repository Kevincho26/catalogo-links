import type { Bookmark, Category } from "./types"

export const categories: Category[] = [
  {
    slug: "sports",
    name: "Sports",
    description: "Live sports, highlights and useful resources.",
    bannerImage: "/banners/sports.jpg",
    image: "/categories/sports.jpg",
  },
  {
    slug: "movies-tv-shows",
    name: "Movies & TV Shows",
    description: "Movies, shows and entertainment resources.",
    bannerImage: "/banners/movies-tv-shows.jpg",
    image: "/categories/movies-tv-shows.jpg",
  },
  {
    slug: "anime",
    name: "Anime",
    description: "Anime series, films and related resources.",
    bannerImage: "/banners/anime.jpg",
    image: "/categories/anime.jpg",
  },
]

export const bookmarks: Bookmark[] = [
  {
    id: "1",
    title: "StreamSports99",
    url: "https://streamsports99.ru",
    description: "High quality sport streams from different countries",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    featured: true,
  },
  {
    id: "2",
    title: "NTV.cx",
    url: "https://ntv.cx",
    description: "High quality sport streams mainly in English",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    featured: true,
  },
  {
    id: "3",
    title: "Daddylive",
    url: "https://dlstreams.top",
    description: "High quality sport streams from different countries",
    category: "sports",
    tags: ["football", "basketball", "tennis", "racing"],
    featured: true,
  },
  {
    id: "4",
    title: "Cinemacity",
    url: "https://cinemacity.cc",
    description: "High quality movies, TV shows and anime streaming servers [DUB & SUB]",
    category: "movies-tv-shows",
    tags: ["movies", "tv shows", "anime"],
  },
  {
    id: "5",
    title: "Showbox",
    url: "https://www.showbox.media/",
    description: "High quality movies, TV shows streaming servers [SUB]",
    category: "movies-tv-shows",
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
